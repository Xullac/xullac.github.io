import React, {useState, useEffect} from 'react';
import {Header} from '../components/Header';

const questions = [
    {
        question: "How do you handle a tough challenge?",
        answers: [
            {text: "Head-on, full force", types: ["fighting", "fire"]},
            {text: "Think it through carefully", types: ["psychic", "normal"]},
            {text: "Adapt and flow with it", types: ["water", "ghost"]},
            {text: "Stay hidden, strike at the right moment", types: ["dark", "poison"]},
        ],
    },
    {
        question: "Pick your ideal environment:",
        answers: [
            {text: "Towering mountain peaks", types: ["rock", "flying", "dragon"]},
            {text: "A dense, ancient forest", types: ["grass", "bug"]},
            {text: "Deep ocean trenches", types: ["water", "ice"]},
            {text: "A bustling city at night", types: ["electric", "dark"]},
        ],
    },
    {
        question: "Your friends would describe you as:",
        answers: [
            {text: "Fiercely loyal and protective", types: ["fighting", "normal", "fire"]},
            {text: "Mysterious and unpredictable", types: ["ghost", "psychic", "dark"]},
            {text: "Calm and dependable", types: ["water", "ground", "rock"]},
            {text: "Energetic and spontaneous", types: ["electric", "flying", "fire"]},
        ],
    },
    {
        question: "Choose a superpower:",
        answers: [
            {text: "Control over time and space", types: ["psychic", "dragon"]},
            {text: "Command over nature", types: ["grass", "ground", "water"]},
            {text: "Elemental destruction", types: ["fire", "electric", "ice"]},
            {text: "Invisibility and stealth", types: ["ghost", "dark", "poison"]},
        ],
    },
    {
        question: "In a group, you tend to be:",
        answers: [
            {text: "The leader", types: ["fighting", "fire", "dragon"]},
            {text: "The strategist", types: ["psychic", "dark"]},
            {text: "The peacekeeper", types: ["normal", "fairy", "grass"]},
            {text: "The wildcard", types: ["electric", "ghost", "flying"]},
        ],
    },
    {
        question: "What's your biggest strength?",
        answers: [
            {text: "Raw power", types: ["fighting", "rock", "dragon"]},
            {text: "Intelligence and intuition", types: ["psychic", "electric"]},
            {text: "Endurance and resilience", types: ["water", "ground", "normal"]},
            {text: "Speed and surprise", types: ["dark", "ghost", "flying"]},
        ],
    },
    {
        question: "Pick a time of day:",
        answers: [
            {text: "High noon — peak energy", types: ["fire", "fighting"]},
            {text: "Golden hour — peaceful beauty", types: ["fairy", "grass", "normal"]},
            {text: "Twilight — the in-between", types: ["psychic", "ghost"]},
            {text: "Dead of night — silent power", types: ["dark", "ice", "dragon"]},
        ],
    },
    {
        question: "Your ideal weekend:",
        answers: [
            {text: "An intense workout or competition", types: ["fighting", "fire"]},
            {text: "Reading, puzzles, or a museum", types: ["psychic", "normal"]},
            {text: "A hike or swim in nature", types: ["grass", "water", "ground"]},
            {text: "Something spontaneous — figure it out", types: ["electric", "flying", "dark"]},
        ],
    },
];

const typeToPokemon: Record<string, string> = {
    fire: 'charizard',
    water: 'vaporeon',
    grass: 'leafeon',
    electric: 'jolteon',
    psychic: 'espeon',
    dark: 'umbreon',
    ghost: 'gengar',
    fighting: 'lucario',
    dragon: 'dragonite',
    flying: 'togekiss',
    ice: 'glaceon',
    rock: 'tyranitar',
    ground: 'garchomp',
    poison: 'toxtricity',
    bug: 'scizor',
    normal: 'eevee',
    fairy: 'sylveon',
};

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
};

interface PokemonResult {
    name: string;
    officialArt: string;
    types: string[];
    dominantType: string;
}

type Phase = 'intro' | 'quiz' | 'loading' | 'result';

export function PokemonPage() {
    const [phase, setPhase] = useState<Phase>('intro');
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [scores, setScores] = useState<Record<string, number>>({});
    const [result, setResult] = useState<PokemonResult | null>(null);
    const [animating, setAnimating] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 50);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (phase === 'quiz' || phase === 'result') {
            setVisible(false);
            const timer = setTimeout(() => setVisible(true), 50);
            return () => clearTimeout(timer);
        }
    }, [currentQuestion, phase]);

    const resetAndTransition = (callback: () => void) => {
        setVisible(false);
        setTimeout(callback, 350);
    };

    const startQuiz = () => {
        resetAndTransition(() => {
            setPhase('quiz');
            setCurrentQuestion(0);
            setScores({});
            setResult(null);
            setSelectedAnswer(null);
            setAnimating(false);
        });
    };

    const handleAnswer = (answerIndex: number, types: string[]) => {
        if (animating) return;
        setSelectedAnswer(answerIndex);
        setAnimating(true);

        const newScores = {...scores};
        types.forEach((t) => {
            newScores[t] = (newScores[t] || 0) + 1;
        });

        setTimeout(async () => {
            if (currentQuestion < questions.length - 1) {
                setVisible(false);
                setTimeout(() => {
                    setCurrentQuestion((q) => q + 1);
                    setSelectedAnswer(null);
                    setAnimating(false);
                    setScores(newScores);
                }, 300);
            } else {
                setScores(newScores);
                setPhase('loading');
                await fetchResult(newScores);
            }
        }, 500);
    };

    const fetchResult = async (finalScores: Record<string, number>) => {
        const dominantType = Object.entries(finalScores).sort((a, b) => b[1] - a[1])[0]?.[0] || 'normal';
        const pokemonName = typeToPokemon[dominantType] || 'eevee';
        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
            const data = await res.json();
            setResult({
                name: data.name,
                officialArt: data.sprites.other?.['official-artwork']?.front_default || data.sprites.front_default,
                types: data.types.map((t: any) => t.type.name),
                dominantType,
            });
        } catch {
            setResult({
                name: 'eevee',
                officialArt: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png',
                types: ['normal'],
                dominantType: 'normal',
            });
        }
        setPhase('result');
    };

    const progress = (currentQuestion / questions.length) * 100;

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <Header/>

            <div className="max-w-3xl mx-auto px-6 py-16">

                {/* INTRO */}
                {phase === 'intro' && (
                    <div
                        className={`text-center pt-10 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="text-8xl mb-6 mt-4" style={{animation: 'bounce 1s infinite'}}>⚡</div>
                        <h1 className="text-6xl font-bold text-white mb-3">Which Pokémon</h1>
                        <h2 className="text-5xl font-bold text-purple-400 mb-6">Are You?</h2>
                        <p className="text-gray-300 text-xl max-w-xl mx-auto leading-relaxed mb-12">
                            Answer 8 questions and discover which Pokémon matches your personality. Your result is
                            fetched live from the PokéAPI.
                        </p>

                        <div className="grid grid-cols-3 gap-4 mb-12 max-w-xs mx-auto">
                            {['🔥', '💧', '⚡', '🌿', '👻', '🐉'].map((emoji, i) => (
                                <div key={i}
                                     className="bg-slate-800/50 border border-purple-500/20 rounded-xl p-4 text-3xl hover:scale-110 transition-transform cursor-default select-none">
                                    {emoji}
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={startQuiz}
                            className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xl font-bold rounded-2xl hover:from-purple-500 hover:to-pink-500 transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 active:scale-95"
                        >
                            Start Quiz →
                        </button>
                    </div>
                )}

                {/* QUIZ */}
                {phase === 'quiz' && (
                    <div
                        className={`pt-10 transition-all duration-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                        {/* Progress */}
                        <div className="mb-10">
                            <div className="flex justify-between text-gray-400 text-sm mb-3">
                                <span>Question {currentQuestion + 1} of {questions.length}</span>
                                <span>{Math.round(progress)}%</span>
                            </div>
                            <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500"
                                    style={{width: `${progress}%`}}
                                />
                            </div>
                        </div>

                        {/* Question */}
                        <div
                            className="bg-gradient-to-br from-slate-800/60 to-purple-900/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 mb-6 text-center">
                            <h2 className="text-2xl font-bold text-white">
                                {questions[currentQuestion].question}
                            </h2>
                        </div>

                        {/* Answers */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {questions[currentQuestion].answers.map((answer, i) => (
                                <button
                                    key={i}
                                    onClick={() => handleAnswer(i, answer.types)}
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

                {/* LOADING */}
                {phase === 'loading' && (
                    <div className="text-center pt-40">
                        <div className="text-7xl mb-8 inline-block animate-spin">⚙️</div>
                        <p className="text-white text-2xl font-bold mb-2">Analyzing your answers...</p>
                        <p className="text-purple-300 text-lg">Consulting Professor Oak</p>
                    </div>
                )}

                {/* RESULT */}
                {phase === 'result' && result && (
                    <div
                        className={`text-center pt-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <p className="text-purple-300 text-xl mb-1">You are...</p>
                        <h1 className="text-5xl font-bold text-white capitalize mb-8">
                            {result.name}
                        </h1>

                        {/* Pokémon Card */}
                        <div
                            className={`bg-gradient-to-br ${typeCardStyles[result.dominantType] || typeCardStyles.normal} backdrop-blur-sm rounded-3xl p-8 border mb-6 mx-auto max-w-sm`}>
                            <img
                                src={result.officialArt}
                                alt={result.name}
                                className="w-56 h-56 mx-auto object-contain drop-shadow-2xl"
                            />
                        </div>

                        {/* Type badges */}
                        <div className="flex gap-3 justify-center mb-10">
                            {result.types.map((type) => (
                                <span
                                    key={type}
                                    className={`px-5 py-2 rounded-full text-sm font-bold uppercase tracking-widest ${typeBadgeStyles[type] || typeBadgeStyles.normal}`}
                                >
                                    {type}
                                </span>
                            ))}
                        </div>

                        {/* Score breakdown */}
                        <div
                            className="bg-slate-800/40 border border-purple-500/20 rounded-2xl p-6 mb-10 text-left max-w-md mx-auto">
                            <p className="text-gray-400 text-xs uppercase tracking-widest mb-4 text-center">Your Type
                                Breakdown</p>
                            {Object.entries(scores)
                                .sort((a, b) => b[1] - a[1])
                                .slice(0, 5)
                                .map(([type, score]) => (
                                    <div key={type} className="mb-3">
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="capitalize text-gray-300">{type}</span>
                                            <span className="text-gray-500">{score} pts</span>
                                        </div>
                                        <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                                                style={{
                                                    width: `${(score / Math.max(...Object.values(scores))) * 100}%`,
                                                    transition: 'width 1s ease'
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                        </div>

                        <button
                            onClick={startQuiz}
                            className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xl font-bold rounded-2xl hover:from-purple-500 hover:to-pink-500 transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 active:scale-95"
                        >
                            Try Again ↺
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}