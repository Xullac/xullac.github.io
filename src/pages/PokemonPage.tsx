import React, {useState, useEffect} from 'react';
import {Header} from '../components/Header';
import pokeball from '../images/pokeball-png-45330.png';
// @ts-ignore
import pikachuVideo from '../images/pikachu-and-caterpie-01.mp4';

// ─── Types ────────────────────────────────────────────────────────────────────

type StatProfile = 'tank' | 'sweeper' | 'support' | 'speedster' | 'special';
type Phase = 'intro' | 'generating' | 'chapter-intro' | 'quiz' | 'loading-result' | 'result';

interface Answer {
    text: string;
    types: string[];
    statProfile: StatProfile;
}

interface Question {
    question: string;
    answers: Answer[];
}

interface Chapter {
    title: string;
    subtitle: string;
    emoji: string;
    questions: Question[];
}

interface PokemonResult {
    name: string;
    officialArt: string;
    types: string[];
    dominantType: string;
    statProfile: StatProfile;
    stats: Record<string, number>;
    flavorText?: string;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const CHAPTERS_META = [
    {title: 'Your Nature', subtitle: 'Who are you at your core?', emoji: '🔥'},
    {title: 'In Battle', subtitle: 'How do you face conflict?', emoji: '💧'},
    {title: 'Your World', subtitle: 'Where do you belong?', emoji: '⚡'},
    {title: 'Deep Down', subtitle: 'What drives you?', emoji: '🪨'},
    {title: 'Your Legend', subtitle: 'What will you be remembered for?', emoji: '🐲'},
];

const typeCardStyles: Record<string, string> = {
    fire: 'from-orange-500/20 to-red-500/20 border-orange-500/40',
    water: 'from-blue-500/20 to-cyan-500/20 border-blue-500/40',
    grass: 'from-green-500/20 to-emerald-500/20 border-green-500/40',
    electric: 'from-yellow-400/20 to-amber-500/20 border-yellow-400/40',
    psychic: 'from-pink-500/20 to-purple-500/20 border-pink-500/40',
    dark: 'from-gray-700/40 to-slate-800/40 border-gray-600/40',
    ghost: 'from-indigo-500/20 to-purple-700/20 border-indigo-500/40',
    fighting: 'from-red-600/20 to-orange-600/20 border-red-500/40',
    dragon: 'from-violet-600/20 to-blue-700/20 border-violet-500/40',
    flying: 'from-sky-400/20 to-blue-400/20 border-sky-400/40',
    ice: 'from-cyan-400/20 to-blue-300/20 border-cyan-400/40',
    rock: 'from-stone-500/20 to-amber-700/20 border-stone-500/40',
    ground: 'from-amber-600/20 to-yellow-700/20 border-amber-600/40',
    poison: 'from-purple-600/20 to-fuchsia-600/20 border-purple-500/40',
    bug: 'from-lime-500/20 to-green-600/20 border-lime-500/40',
    normal: 'from-gray-400/20 to-slate-500/20 border-gray-400/40',
    fairy: 'from-pink-400/20 to-rose-400/20 border-pink-400/40',
    steel: 'from-slate-400/20 to-gray-500/20 border-slate-400/40',
};

const typeBadgeStyles: Record<string, string> = {
    fire: 'bg-orange-500/20 text-orange-300 border border-orange-500/30',
    water: 'bg-blue-500/20 text-blue-300 border border-blue-500/30',
    grass: 'bg-green-500/20 text-green-300 border border-green-500/30',
    electric: 'bg-yellow-400/20 text-yellow-300 border border-yellow-400/30',
    psychic: 'bg-pink-500/20 text-pink-300 border border-pink-500/30',
    dark: 'bg-gray-700/40 text-gray-300 border border-gray-600/30',
    ghost: 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30',
    fighting: 'bg-red-500/20 text-red-300 border border-red-500/30',
    dragon: 'bg-violet-500/20 text-violet-300 border border-violet-500/30',
    flying: 'bg-sky-400/20 text-sky-300 border border-sky-400/30',
    ice: 'bg-cyan-400/20 text-cyan-300 border border-cyan-400/30',
    rock: 'bg-stone-500/20 text-stone-300 border border-stone-500/30',
    ground: 'bg-amber-600/20 text-amber-300 border border-amber-600/30',
    poison: 'bg-purple-600/20 text-purple-300 border border-purple-600/30',
    bug: 'bg-lime-500/20 text-lime-300 border border-lime-500/30',
    normal: 'bg-gray-400/20 text-gray-300 border border-gray-400/30',
    fairy: 'bg-pink-400/20 text-pink-300 border border-pink-400/30',
    steel: 'bg-slate-400/20 text-slate-300 border border-slate-400/30',
};

const statProfileLabels: Record<StatProfile, string> = {
    tank: '🛡️ Tank',
    sweeper: '⚔️ Sweeper',
    support: '💚 Support',
    speedster: '💨 Speedster',
    special: '✨ Special Attacker',
};

// ─── Claude API Call ──────────────────────────────────────────────────────────

async function generateChapters(): Promise<Chapter[]> {
    const prompt = `You are generating questions for a "Which Pokémon Are You?" personality quiz. 
Generate exactly 5 chapters of 5 questions each. Each question must have exactly 4 answer choices.

Chapter themes:
1. "Your Nature" - personality, core traits
2. "In Battle" - conflict, competition, strategy  
3. "Your World" - environment, lifestyle, belonging
4. "Deep Down" - motivations, fears, hidden self
5. "Your Legend" - legacy, ambition, destiny

Each answer must be tagged with:
- types: array of 1-3 Pokémon types from: [fire, water, grass, electric, psychic, dark, ghost, fighting, dragon, flying, ice, rock, ground, poison, bug, normal, fairy, steel]
- statProfile: one of: tank, sweeper, support, speedster, special

Return ONLY valid JSON in this exact format, no other text:
{
  "chapters": [
    {
      "title": "Your Nature",
      "subtitle": "Who are you at your core?",
      "emoji": "🌱",
      "questions": [
        {
          "question": "Question text here?",
          "answers": [
            { "text": "Answer text", "types": ["fire"], "statProfile": "sweeper" },
            { "text": "Answer text", "types": ["water"], "statProfile": "tank" },
            { "text": "Answer text", "types": ["psychic"], "statProfile": "special" },
            { "text": "Answer text", "types": ["grass"], "statProfile": "support" }
          ]
        }
      ]
    }
  ]
}

Make questions creative, evocative, and varied. Avoid repetition. Make answers feel meaningfully different from each other.`;

    const response = await fetch('http://localhost:3001/api/anthropic', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            model: 'claude-sonnet-4-20250514',
            max_tokens: 8000,
            messages: [{role: 'user', content: prompt}],
        }),
    });

    const data = await response.json();
    const text = data.content?.map((b: any) => b.text || '').join('');
    const clean = text.replace(/```json|```/g, '').trim();
    const parsed = JSON.parse(clean);
    return parsed.chapters;
}

// ─── PokéAPI: Find Best Matching Pokémon ─────────────────────────────────────

const STAT_PROFILE_WEIGHTS: Record<StatProfile, Record<string, number>> = {
    tank: {hp: 2, defense: 2, 'special-defense': 2, attack: 0.5, speed: 0.3},
    sweeper: {attack: 2, speed: 1.5, hp: 0.5, defense: 0.5},
    support: {hp: 1.5, 'special-defense': 1.5, defense: 1.5, speed: 0.5},
    speedster: {speed: 3, attack: 1.5, hp: 0.5, defense: 0.3},
    special: {'special-attack': 3, speed: 1.5, 'special-defense': 1, hp: 0.5},
};

async function findBestPokemon(dominantType: string, statProfile: StatProfile): Promise<PokemonResult> {
    const typeRes = await fetch(`https://pokeapi.co/api/v2/type/${dominantType}`);
    const typeData = await typeRes.json();
    const pokemonList: string[] = typeData.pokemon
        .map((p: any) => p.pokemon.name)
        .filter((name: string) => !name.includes('-mega') && !name.includes('-gmax') && !name.includes('-alola') && !name.includes('-galar'))
        .slice(0, 80);

    const sample = pokemonList.sort(() => Math.random() - 0.5).slice(0, 20);
    const weights = STAT_PROFILE_WEIGHTS[statProfile];

    const scored = await Promise.all(
        sample.map(async (name) => {
            try {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
                const d = await res.json();
                const stats: Record<string, number> = {};
                d.stats.forEach((s: any) => {
                    stats[s.stat.name] = s.base_stat;
                });
                const score = Object.entries(weights).reduce((acc, [stat, w]) => acc + (stats[stat] || 0) * w, 0);
                return {name, score, data: d, stats};
            } catch {
                return null;
            }
        })
    );

    const valid = scored.filter(Boolean).sort((a, b) => b!.score - a!.score);
    const best = valid[0]!;

    let flavorText = '';
    try {
        const speciesRes = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${best.name}`);
        const speciesData = await speciesRes.json();
        const entry = speciesData.flavor_text_entries?.find((e: any) => e.language.name === 'en');
        flavorText = entry?.flavor_text?.replace(/\f/g, ' ') || '';
    } catch {
    }

    return {
        name: best.name,
        officialArt: best.data.sprites.other?.['official-artwork']?.front_default || best.data.sprites.front_default,
        types: best.data.types.map((t: any) => t.type.name),
        dominantType,
        statProfile,
        stats: best.stats,
        flavorText,
    };
}

// ─── Component ────────────────────────────────────────────────────────────────

export function PokemonPage() {
    const [phase, setPhase] = useState<Phase>('intro');
    const [chapters, setChapters] = useState<Chapter[]>([]);
    const [chapterIndex, setChapterIndex] = useState(0);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [typeScores, setTypeScores] = useState<Record<string, number>>({});
    const [statScores, setStatScores] = useState<Record<StatProfile, number>>({
        tank: 0, sweeper: 0, support: 0, speedster: 0, special: 0,
    });
    const [result, setResult] = useState<PokemonResult | null>(null);
    const [visible, setVisible] = useState(false);
    const [animating, setAnimating] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [generateError, setGenerateError] = useState('');

    const totalAnswered = chapters.slice(0, chapterIndex).reduce((a, c) => a + c.questions.length, 0) + questionIndex;
    const totalQuestions = chapters.reduce((a, c) => a + c.questions.length, 0) || 25;
    const progress = (totalAnswered / totalQuestions) * 100;

    const fadeIn = () => {
        setVisible(false);
        setTimeout(() => setVisible(true), 50);
    };
    const fadeOut = (cb: () => void) => {
        setVisible(false);
        setTimeout(cb, 350);
    };

    useEffect(() => {
        setTimeout(() => setVisible(true), 100);
    }, []);

    const handleStart = async () => {
        fadeOut(async () => {
            setPhase('generating');
            setVisible(true);
            try {
                const generated = await generateChapters();
                setChapters(generated);
                setChapterIndex(0);
                setQuestionIndex(0);
                setTypeScores({});
                setStatScores({tank: 0, sweeper: 0, support: 0, speedster: 0, special: 0});
                setResult(null);
                fadeOut(() => {
                    setPhase('chapter-intro');
                    fadeIn();
                });
            } catch (e) {
                setGenerateError('Failed to generate questions. Check your API connection.');
                setPhase('intro');
                setVisible(true);
            }
        });
    };

    const handleChapterStart = () => {
        fadeOut(() => {
            setPhase('quiz');
            fadeIn();
        });
    };

    const handleAnswer = (idx: number, answer: Answer) => {
        if (animating) return;
        setSelectedAnswer(idx);
        setAnimating(true);

        const newTypeScores = {...typeScores};
        answer.types.forEach((t) => {
            newTypeScores[t] = (newTypeScores[t] || 0) + 1;
        });
        const newStatScores = {...statScores};
        newStatScores[answer.statProfile] = (newStatScores[answer.statProfile] || 0) + 1;

        setTimeout(() => {
            fadeOut(() => {
                const currentChapter = chapters[chapterIndex];
                const isLastQuestionInChapter = questionIndex >= currentChapter.questions.length - 1;
                const isLastChapter = chapterIndex >= chapters.length - 1;

                setTypeScores(newTypeScores);
                setStatScores(newStatScores);
                setSelectedAnswer(null);
                setAnimating(false);

                if (isLastQuestionInChapter) {
                    if (isLastChapter) {
                        setPhase('loading-result');
                        setVisible(true);
                        const dominantType = Object.entries(newTypeScores).sort((a, b) => b[1] - a[1])[0]?.[0] || 'normal';
                        const dominantStat = (Object.entries(newStatScores).sort((a, b) => b[1] - a[1])[0]?.[0] || 'sweeper') as StatProfile;
                        findBestPokemon(dominantType, dominantStat).then((r) => {
                            setResult(r);
                            fadeOut(() => {
                                setPhase('result');
                                fadeIn();
                            });
                        });
                    } else {
                        setChapterIndex((c) => c + 1);
                        setQuestionIndex(0);
                        setPhase('chapter-intro');
                        fadeIn();
                    }
                } else {
                    setQuestionIndex((q) => q + 1);
                    setPhase('quiz');
                    fadeIn();
                }
            });
        }, 500);
    };

    const currentChapter = chapters[chapterIndex];
    const currentQuestion = currentChapter?.questions[questionIndex];

    return (
        <div className="relative min-h-screen overflow-hidden">

            {/* ── VIDEO BACKGROUND ── */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="fixed inset-0 w-full h-full object-cover z-0"
            >
                <source src={pikachuVideo} type="video/mp4"/>
            </video>

            {/* ── DARK OVERLAY ── */}
            <div className="fixed inset-0 bg-slate-900/75 backdrop-blur-[1px] z-10"/>

            {/* ── CONTENT ── */}
            <div className="relative z-20">
                <Header/>
                <div className="max-w-3xl mx-auto px-6 py-16">

                    {/* ── INTRO ── */}
                    {phase === 'intro' && (
                        <div
                            className={`text-center pt-10 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            <div className="mb-6 mt-4 inline-block" style={{animation: 'bounce 1s infinite'}}>
                                <img src={pokeball} alt="pokeball" className="h-32"/>
                            </div>
                            <h1 className="text-6xl font-bold text-white mb-3">Which Pokémon</h1>
                            <h2 className="text-5xl font-bold text-purple-400 mb-6">Are You?</h2>
                            <p className="text-gray-300 text-xl max-w-xl mx-auto leading-relaxed mb-4">
                                25 questions across 5 chapters. Your personality is matched to a real Pokémon using type
                                affinity and stat profile — fetched live from the PokéAPI.
                            </p>
                            <div className="flex flex-wrap justify-center gap-3 mb-10">
                                {['🔥 Type Matching', '📊 Stat Profiling', '🤖 AI Questions', '📡 Live PokéAPI'].map((tag) => (
                                    <span key={tag}
                                          className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm">{tag}</span>
                                ))}
                            </div>
                            <div className="grid grid-cols-5 gap-3 mb-12 max-w-sm mx-auto">
                                {CHAPTERS_META.map((c) => (
                                    <div key={c.title}
                                         className="bg-slate-800/50 border border-purple-500/20 rounded-xl p-3 text-2xl hover:scale-110 transition-transform cursor-default select-none text-center">
                                        {c.emoji}
                                    </div>
                                ))}
                            </div>
                            {generateError && <p className="text-red-400 mb-4 text-sm">{generateError}</p>}
                            <button onClick={handleStart}
                                    className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xl font-bold rounded-2xl hover:from-purple-500 hover:to-pink-500 transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 active:scale-95">
                                Begin Your Journey →
                            </button>
                        </div>
                    )}

                    {/* ── GENERATING ── */}
                    {phase === 'generating' && (
                        <div
                            className={`text-center pt-40 transition-all duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
                            <div className="mb-8 inline-block" style={{animation: 'spin 1.5s linear infinite'}}>
                                <img src={pokeball} alt="pokeball" className="h-32"/>
                            </div>
                            <p className="text-white text-2xl font-bold mb-2">Crafting your journey...</p>
                        </div>
                    )}

                    {/* ── CHAPTER INTRO ── */}
                    {phase === 'chapter-intro' && currentChapter && (
                        <div
                            className={`text-center pt-20 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            <p className="text-purple-400 text-sm uppercase tracking-widest mb-4">
                                Chapter {chapterIndex + 1} of {chapters.length}
                            </p>
                            <div className="text-8xl mb-6">{currentChapter.emoji}</div>
                            <h2 className="text-5xl font-bold text-white mb-3">{currentChapter.title}</h2>
                            <p className="text-purple-300 text-2xl mb-10">{currentChapter.subtitle}</p>
                            <div className="max-w-xs mx-auto mb-10">
                                <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-700"
                                        style={{width: `${progress}%`}}/>
                                </div>
                                <p className="text-gray-500 text-xs mt-2">{Math.round(progress)}% complete overall</p>
                            </div>
                            <button onClick={handleChapterStart}
                                    className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xl font-bold rounded-2xl hover:from-purple-500 hover:to-pink-500 transition-all hover:scale-105 active:scale-95">
                                {chapterIndex === 0 ? "Let's Go →" : "Continue →"}
                            </button>
                        </div>
                    )}

                    {/* ── QUIZ ── */}
                    {phase === 'quiz' && currentQuestion && (
                        <div
                            className={`pt-10 transition-all duration-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                            <div className="mb-8">
                                <div className="flex justify-between text-gray-400 text-sm mb-2">
                                    <span
                                        className="text-purple-400 font-medium">{currentChapter.emoji} {currentChapter.title}</span>
                                    <span>{totalAnswered + 1} / {totalQuestions}</span>
                                </div>
                                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500"
                                        style={{width: `${progress}%`}}/>
                                </div>
                                <div className="flex justify-between mt-1">
                                    <span
                                        className="text-gray-600 text-xs">Q{questionIndex + 1} of {currentChapter.questions.length} in chapter</span>
                                    <span className="text-gray-600 text-xs">{Math.round(progress)}%</span>
                                </div>
                            </div>
                            <div
                                className="bg-gradient-to-br from-slate-800/60 to-purple-900/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 mb-6 text-center">
                                <h2 className="text-2xl font-bold text-white leading-relaxed">{currentQuestion.question}</h2>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {currentQuestion.answers.map((answer, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handleAnswer(i, answer)}
                                        disabled={animating}
                                        className={`p-6 rounded-xl border text-left transition-all duration-300 font-medium text-lg
                                            ${selectedAnswer === i
                                            ? 'bg-purple-500/40 border-purple-400 text-white scale-95 shadow-lg shadow-purple-500/20'
                                            : 'bg-slate-800/50 border-purple-500/20 text-gray-200 hover:bg-purple-500/20 hover:border-purple-400/60 hover:text-white hover:scale-[1.02]'
                                        }
                                            ${animating && selectedAnswer !== i ? 'opacity-30' : ''}
                                        `}
                                    >
                                        <span className="text-purple-400 mr-3">▹</span>
                                        {answer.text}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* ── LOADING RESULT ── */}
                    {phase === 'loading-result' && (
                        <div className="text-center pt-40">
                            <div className="text-7xl mb-8 inline-block"
                                 style={{animation: 'spin 1.5s linear infinite'}}>🔮
                            </div>
                            <p className="text-white text-2xl font-bold mb-2">Searching the Pokédex...</p>
                            <p className="text-purple-300 text-lg">Matching your profile across 1000+ Pokémon</p>
                        </div>
                    )}

                    {/* ── RESULT ── */}
                    {phase === 'result' && result && (
                        <div
                            className={`text-center pt-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <p className="text-purple-300 text-xl mb-1">Your Pokémon is...</p>
                            <h1 className="text-5xl font-bold text-white capitalize mb-2">{result.name}</h1>
                            <p className="text-gray-400 mb-8">{statProfileLabels[result.statProfile]}</p>
                            <div
                                className={`bg-gradient-to-br ${typeCardStyles[result.dominantType] || typeCardStyles.normal} backdrop-blur-sm rounded-3xl p-8 border mb-6 mx-auto max-w-sm`}>
                                <img src={result.officialArt} alt={result.name}
                                     className="w-56 h-56 mx-auto object-contain drop-shadow-2xl"/>
                            </div>
                            <div className="flex gap-3 justify-center mb-6">
                                {result.types.map((type) => (
                                    <span key={type}
                                          className={`px-5 py-2 rounded-full text-sm font-bold uppercase tracking-widest ${typeBadgeStyles[type] || typeBadgeStyles.normal}`}>
                                        {type}
                                    </span>
                                ))}
                            </div>
                            {result.flavorText && (
                                <div
                                    className="bg-slate-800/40 border border-purple-500/20 rounded-xl p-5 mb-8 max-w-md mx-auto">
                                    <p className="text-gray-300 italic text-sm leading-relaxed">"{result.flavorText}"</p>
                                </div>
                            )}
                            <div
                                className="bg-slate-800/40 border border-purple-500/20 rounded-2xl p-6 mb-8 text-left max-w-md mx-auto">
                                <p className="text-gray-400 text-xs uppercase tracking-widest mb-4 text-center">Base
                                    Stats</p>
                                {Object.entries(result.stats).map(([stat, val]) => (
                                    <div key={stat} className="mb-3">
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="capitalize text-gray-300">{stat.replace('-', ' ')}</span>
                                            <span className="text-gray-500">{val}</span>
                                        </div>
                                        <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                                                style={{
                                                    width: `${Math.min((val / 255) * 100, 100)}%`,
                                                    transition: 'width 1.2s ease'
                                                }}/>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div
                                className="bg-slate-800/40 border border-purple-500/20 rounded-2xl p-6 mb-10 text-left max-w-md mx-auto">
                                <p className="text-gray-400 text-xs uppercase tracking-widest mb-4 text-center">Your Top
                                    Type Affinities</p>
                                {Object.entries(typeScores).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([type, score]) => (
                                    <div key={type} className="mb-3">
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="capitalize text-gray-300">{type}</span>
                                            <span className="text-gray-500">{score} pts</span>
                                        </div>
                                        <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                                                style={{
                                                    width: `${(score / Math.max(...Object.values(typeScores))) * 100}%`,
                                                    transition: 'width 1s ease'
                                                }}/>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button onClick={handleStart}
                                    className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xl font-bold rounded-2xl hover:from-purple-500 hover:to-pink-500 transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 active:scale-95">
                                Try Again ↺
                            </button>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}