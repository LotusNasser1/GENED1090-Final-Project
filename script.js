const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

// PHILOSOPHER DEFINITIONS WITH EVIDENCE
const PHILOSOPHERS = {
    confucius: {
        id: "confucius",
        name: "孔子 Confucius",
        type: "🌲 The Ceremonial Pine",
        chineseTree: "儀松 (Yí Sōng)",
        description:
            "Like a carefully pruned pine, Confucian cultivation is upright, layered, and structured. Ritual, hierarchy, and patterned roles keep the social world standing tall.",
        treeRationale: "The pine is chosen because Confucius emphasizes upright moral character and hierarchical structure. In the Analects, he states that 'the superior person is dignified but not proud,' much like a pine that stands tall through all seasons. The pine's evergreen nature mirrors Confucius's commitment to unchanging moral principles and ritual practice.",
        evidence: "From the Analects: 'The Master said, \"At fifteen I set my heart on learning; at thirty I took my stand; at forty I came to be free from doubts...\"' (2.4). This progression reflects the pine's steady, structured growth through predictable stages, each building upon the last in ceremonial order.",
        extra:
            "In your garden choices, Confucian answers prioritized proper form, respect for rank, and teaching people how to behave before simply helping them.",
        treeImages: {
            full: "trees/confucius_tree.png"
        }
    },
    mencius: {
        id: "mencius",
        name: "孟子 Mencius",
        type: "🍑 The Fruit-Bearer Peach",
        chineseTree: "善芽桃 (Shàn Yá Táo)",
        description:
            "Mencius sees people as sprouts of goodness. Given protection and nourishment, those sprouts become heavy branches of compassion, like a peach tree loaded with fruit.",
        treeRationale: "The peach tree is selected because Mencius uses agricultural metaphors extensively, particularly the famous 'sprout' analogy. The peach tree requires careful nurturing but naturally produces abundant, sweet fruit—just as human goodness, when cultivated, naturally flourishes into compassion and righteousness.",
        evidence: "From Mengzi: 'All human beings have a mind that cannot bear to see the suffering of others' (2A6). The four sprouts—compassion, shame, courtesy, and moral discernment—are like tender shoots that, if nurtured, grow into the four cardinal virtues. Mencius writes: 'These four sprouts are like a fire beginning to burn or a spring beginning to well up.'",
        extra:
            "Mencian choices showed up when you trusted your immediate compassion more than rules or penalties, especially with the crying child and thieves.",
        treeImages: {
            full: "trees/mencius_tree.png"
        }
    },
    laozi: {
        id: "laozi",
        name: "老子 Laozi",
        type: "🌊 The Yielding Willow",
        chineseTree: "柔道柳 (Róu Dào Liǔ)",
        description:
            "Laozi's willow bends instead of breaking. Its strength comes from softness and flexibility, following the Dao instead of forcing outcomes.",
        treeRationale: "The willow embodies Laozi's core teaching that 'the soft overcomes the hard.' Willows bend with wind and water, never resisting, yet they endure where rigid trees snap. Their branches trail downward in wu-wei (effortless action), following gravity rather than striving upward.",
        evidence: "From the Daodejing: 'The highest good is like water. Water benefits the ten thousand things and does not compete' (Chapter 8). And: 'When alive, humans are soft and supple; when dead, they are hard and rigid... Thus the hard and rigid are companions of death, while the soft and supple are companions of life' (Chapter 76). The willow's yielding nature perfectly captures this paradoxical strength.",
        extra:
            "You often chose to step back, intervene minimally, or let things resolve on their own — classic Daoist wu-wei (effortless action).",
        treeImages: {
            full: "trees/laozi_tree.png"
        }
    },
    zhuangzi: {
        id: "zhuangzi",
        name: "莊子 Zhuangzi",
        type: "🌴 The Useless Gnarled Oak",
        chineseTree: "無用櫟 (Wú Yòng Lì)",
        description:
            "Zhuangzi loves the strange and the untamed. His oak lives a long carefree life precisely because no one can turn it into timber.",
        treeRationale: "The gnarled oak comes directly from Zhuangzi's parable of the 'useless tree.' Its twisted, knotted form makes it worthless for timber, so it grows to a magnificent old age, untouched by axes. This represents Zhuangzi's celebration of uselessness and freedom from conventional purposes.",
        evidence: "From the Zhuangzi: Carpenter Shi passes by a sacred oak at a shrine and refuses to look at it. His apprentice asks why. The carpenter replies: 'It's a worthless tree. Make boats and they'd sink, make coffins and they'd rot, make tools and they'd break. There's no use for it, and that's why it's lived so long' (Chapter 4). Later, the tree appears to the carpenter in a dream and says: 'What would you compare me to, some useful tree? All useful trees are cut down. Only useless trees live out their natural lives.'",
        extra:
            "When you treat problems as chances to rethink values or laugh at fixed categories, you are answering like Zhuangzi.",
        treeImages: {
            full: "trees/zhuangzi_tree.png"
        }
    },
    mozi: {
        id: "mozi",
        name: "墨子 Mozi",
        type: "🌳 The Productive Mulberry",
        chineseTree: "利民桑 (Lì Mín Sāng)",
        description:
            "Mozi's tree is practical and generous. The mulberry is useful to ordinary people: shade, leaves, fruit, benefits that can be measured.",
        treeRationale: "The mulberry tree represents Mozi's philosophy of practical benefit (li) and universal care. Mulberry trees were essential to Chinese silk production and provided food (mulberries) for common people. Unlike ornamental trees valued for ritual purposes, the mulberry serves everyone impartially.",
        evidence: "From the Mozi: 'When the ancient sage-kings governed the world, they always valued frugality in expenditure... They built palaces only high enough to avoid dampness, walls only thick enough to keep out wind and cold' (Chapter 20, 'Moderation in Expenditures'). Mozi criticizes wasteful rituals and elaborate funerals, arguing instead for practical benefit: 'Does it benefit the people? This is the standard.' The mulberry's multiple uses for silk, food, and shade embody this utilitarian ethic.",
        extra:
            "Mozi shows up when you care about equal distribution, community benefit, and avoiding wasteful luxury.",
        treeImages: {
            full: "trees/mozi_tree.png"
        }
    },
    xunzi: {
        id: "xunzi",
        name: "荀子 Xunzi",
        type: "🎋 The Disciplined Bonsai",
        chineseTree: "矯性盆栽 (Jiǎo Xìng Pén Zāi)",
        description:
            "For Xunzi, raw human nature is crooked wood that must be steamed, bent, and wired into shape. The bonsai is beautiful precisely because of long training.",
        treeRationale: "The bonsai perfectly captures Xunzi's belief that human nature is fundamentally crooked and requires deliberate artifice to become good. Just as bonsai cultivation involves wiring, pruning, and shaping over many years, Xunzi argues that human transformation requires sustained ritual training and discipline.",
        evidence: "From the Xunzi: 'The nature of man is evil; his goodness is only acquired by training' (Chapter 23). More specifically: 'Crooked wood must be steamed and bent before it becomes straight; blunt metal must be ground and whetted before it becomes sharp' (Chapter 1, 'Encouraging Learning'). And: 'A piece of wood as straight as a plumb line may be bent into a circle as perfect as if drawn with a compass... because the tools have been applied to it. Thus, wood can be made straight by tools, and men can be made good by training.'",
        extra:
            "You answer like Xunzi when you focus on exams, training, instruction, and correcting people so they will improve over time.",
        treeImages: {
            full: "trees/xunzi_tree.png"
        }
    },
    legalist: {
        id: "legalist",
        name: "法家 Legalist (Lord Shang & Han Feizi)",
        type: "🌿 The Regimented Hedge",
        chineseTree: "法籬 (Fǎ Lí)",
        description:
            "Legalist cultivation trims people into a living wall. Clear laws, hard punishments, and predictable rewards matter more than inner virtue.",
        treeRationale: "The hedge represents the Legalist vision of human cultivation: individuals are trimmed, shaped, and arranged into a functional unit through external force. Unlike trees that grow individually, hedge plants are valued only for their collective uniformity. They're pruned ruthlessly to maintain straight lines and prevent any single plant from standing out.",
        evidence: "From Lord Shang: 'When the people are strong, the army is strong; when the army is strong, the state is strong' (Book of Lord Shang). The state must 'unify rewards and punishments' to make people predictable. From Han Feizi: 'Bestow rewards without bias, and then good ministers will exert themselves; inflict punishments impartially, and then evil ministers will have fear' (Chapter 7). The hedge metaphor captures this: individual variation is eliminated through systematic trimming (punishments) to create uniform social order.",
        extra:
            "Whenever you prioritize protocol, punishment, or strict rationing over feelings and relationships, you are growing a Legalist hedge.",
        treeImages: {
            full: "trees/legalist_tree.png"
        }
    },
    shang: {
        id: "shang",
        name: "商鞅 Lord Shang",
        type: "📏 The Measured Hedge Section",
        chineseTree: "量法籬 (Liáng Fǎ Lí)",
        description:
            "Lord Shang's portion of the Legalist hedge is obsessively measured. Every branch must align with strict agricultural and military quotas. Deviation is immediately visible and punished.",
        treeRationale: "The measured hedge section emphasizes Lord Shang's focus on quantifiable standards and agricultural-military mobilization. His reforms turned Qin into a state where every household's production could be measured, every soldier's kills counted, and rewards distributed with mathematical precision.",
        evidence: "From the Book of Lord Shang: 'The way to organize a state well is to have laws that are clear and rewards and punishments that are certain' (Chapter 5). Lord Shang implemented the 'mutual responsibility system' (baojia) where groups of families were collectively punished for any individual's crime. His reforms created seventeen ranks of merit based solely on battlefield performance: 'He who kills one enemy is granted one degree of rank... he who kills two enemies has the land of two households assigned to him.'",
        extra:
            "You aligned with Lord Shang when you emphasized measurable standards, group punishment, or rewarding only concrete achievements.",
        treeImages: {
            full: "trees/legalist_tree.png"
        }
    },
    hanfei: {
        id: "hanfei",
        name: "韓非子 Han Feizi",
        type: "🎍 The Strategic Bamboo",
        chineseTree: "術竹 (Shù Zhú)",
        description:
            "Han Feizi's bamboo appears flexible but is actually a system of hidden techniques. It grows in sections—each one representing shu (technique), fa (law), and shi (positional power).",
        treeRationale: "Bamboo represents Han Feizi's sophisticated theory of power techniques. Like bamboo that appears simple but has complex internal structure and grows through strategic node points, Han Feizi's system combines multiple methods: laws (fa), techniques of control (shu), and positional power (shi). Bamboo's hollow center also suggests the ruler's emptiness—maintaining inscrutability.",
        evidence: "From the Han Feizi: 'The enlightened ruler controls his ministers by means of two handles alone. The two handles are punishment and favor' (Chapter 7). He advises rulers to remain inscrutable: 'The Way of the ruler is to treasure stillness and reserve. Without revealing his desires, he causes his ministers to show their colors' (Chapter 5). Han Feizi synthesizes Shen Buhai's shu (techniques), Shang Yang's fa (laws), and Shen Dao's shi (positional power) into one comprehensive system—like bamboo segments that appear separate but are internally connected.",
        extra:
            "Han Feizi thinking appeared when you focused on control techniques, information asymmetry, or strategic suspicion rather than just punishment.",
        treeImages: {
            full: "trees/hanfei-tree.png"
        }
    },
    inward: {
        id: "inward",
        name: "內業 Inward Training",
        type: "✨ The Luminous Bodhi",
        chineseTree: "氣光樹 (Qì Guāng Shù)",
        description:
            "Inward Training focuses on quiet breath and settled qi. Like a luminous bodhi tree, transformation begins in stillness and radiates outward.",
        treeRationale: "The bodhi tree is chosen for its association with enlightenment through meditation and its glowing, peaceful presence. While bodhi trees are more commonly associated with Buddhism, they represent the internal cultivation and luminous qi that Inward Training emphasizes. The tree's wide canopy and deep roots mirror the text's focus on grounding oneself through breath while expanding awareness.",
        evidence: "From Inward Training: 'For all [to practice] the Way: You must coil, you must contract, you must uncoil, you must expand, you must be firm, you must be regular [in this practice]' (Lines 9-10). And: 'With a well-ordered mind within, well-ordered words issue forth from the mouth, and well-ordered tasks are imposed on others' (Lines 61-63). The text emphasizes: 'If you can be aligned and tranquil, only then can you be stable... The vitality of all people inevitably comes from their peace of mind. When anxious, you lose this guiding thread; when angry, you lose this basic point.'",
        extra:
            "You align with Inward Training when you choose stillness, breath, meditation, or self-cultivation over external control.",
        treeImages: {
            full: "trees/inward_tree.png"
        }
    }
};

// emoji stages for quiz tree
const TREE_STAGES = [
    { label: "Seed", emoji: "🌰" },
    { label: "Sprout", emoji: "🌱" },
    { label: "Tender Shoot", emoji: "🌿" },
    { label: "Young Tree", emoji: "🌳" },
    { label: "Deep Roots", emoji: "🌲" },
    { label: "Ready to Bloom", emoji: "🌳✨" },
    { label: "Full Philosophy Tree", emoji: "🌳🏛️" }
];

// SCENARIOS 
const SCENARIOS = [
    {
        title: "🌱 The Crying Child",
        text:
            "A small child wanders into your garden, crying. They are lost and afraid.\n\nHow do you respond?",
        choices: [
            {
                text: "💚 Comfort them warmly and help find their family.",
                philosophy: "mencius",
                feedback:
                    "You trust your spontaneous compassion. Mencius would say one of your sprouts just grew."
            },
            {
                text:
                    "📜 First teach them polite words for requesting help, then assist.",
                philosophy: "confucius",
                feedback:
                    "You mix kindness with ritual instruction — very Confucian pine energy."
            },
            {
                text: "🌊 Sit nearby quietly until they calm down on their own.",
                philosophy: "laozi",
                feedback:
                    "By doing almost nothing, you practice Daoist wu-wei: gentle, minimal action."
            },
            {
                text:
                    "🦋 Watch the situation, thinking about what it reveals about 'lost' and 'found'.",
                philosophy: "zhuangzi",
                feedback:
                    "You treat the scene as a philosophical story, not just a problem to fix."
            },
            {
                text:
                    "⚖️ Report the child to the authorities and follow procedure exactly.",
                philosophy: "legalist",
                feedback:
                    "You prioritize clear protocol over personal feeling — growing a Legalist hedge."
            }
        ]
    },
    {
        title: "🌿 The Broken Fence",
        text:
            "Your garden fence has broken. A neighbor offers to fix it, but insists on building it taller and stronger than before.\n\nWhat do you decide?",
        choices: [
            {
                text:
                    "🤝 Accept gratefully,  it protects everyone, and their help benefits the whole street.",
                philosophy: "mozi",
                feedback:
                    "You value mutual benefit and shared security, just like Mozi."
            },
            {
                text:
                    "📐 Accept, but insist it follow the traditional measurements and style.",
                philosophy: "confucius",
                feedback:
                    "You worry about proper form and inherited standards: Confucian ritual as architecture."
            },
            {
                text: "🍃 Leave it open; gaps let wind, animals, and people flow through.",
                philosophy: "laozi",
                feedback:
                    "You see the usefulness of an opening — a very Daoist move."
            },
            {
                text:
                    "🎨 Leave it broken on purpose as a reminder that boundaries are just ideas.",
                philosophy: "zhuangzi",
                feedback:
                    "You turn the fence into a commentary on distinctions themselves."
            },
            {
                text:
                    "⚖️ Refuse their plan and instead build a perfectly uniform fence by law.",
                philosophy: "legalist",
                feedback:
                    "Detailed control plus uniformity — that's the Legalist hedge taking shape."
            }
        ]
    },
    {
        title: "📚 The Visiting Scholar",
        text:
            "A traveling scholar offers to teach in your garden in exchange for food and shelter, but their ideas conflict with local tradition.\n\nWhat do you do?",
        choices: [
            {
                text:
                    "💝 Welcome them warmly, more perspectives deepen the heart.",
                philosophy: "mencius",
                feedback:
                    "You extend kindness and treat learning as nourishment, a Mencian impulse."
            },
            {
                text:
                    "📜 Allow them to teach only if they respect core rituals and classics.",
                philosophy: "confucius",
                feedback:
                    "You let learning in, but inside the frame of ritual — very Confucian."
            },
            {
                text:
                    "🎭 Let them speak freely and tell students to explore what resonates.",
                philosophy: "zhuangzi",
                feedback:
                    "You're comfortable with multiple, shifting perspectives, like Zhuangzi."
            },
            {
                text:
                    "🚫 Refuse, unauthorized teaching might undermine social order.",
                philosophy: "legalist",
                feedback:
                    "You treat information as something that must be tightly controlled."
            },
            {
                text:
                    "🧘 Let them teach but remind your students to center themselves first.",
                philosophy: "inward",
                feedback:
                    "You trust internal clarity more than external doctrine."
            }
        ]
    },
    {
        title: "🥕 The Vegetable Thieves",
        text:
            "Thieves keep stealing vegetables from your garden at night. They appear to be poor and desperate.\n\nWhat do you do?",
        choices: [
            {
                text:
                    "💚 Leave extra vegetables near the gate so they don't have to steal.",
                philosophy: "mencius",
                feedback:
                    "You respond to suffering with compassion and trust in their basic decency."
            },
            {
                text:
                    "📋 Set up a sign explaining garden etiquette, then offer them work.",
                philosophy: "confucius",
                feedback:
                    "You use ritual instruction to transform a problem into dignified participation."
            },
            {
                text:
                    "🏡 Ignore it; the garden gives what it gives, and needs aren't crimes.",
                philosophy: "laozi",
                feedback:
                    "You don't resist the flow of things — very wu-wei."
            },
            {
                text:
                    "🤔 Reflect on what 'theft' and 'ownership' really mean in the first place.",
                philosophy: "zhuangzi",
                feedback:
                    "You question the premise instead of solving the problem."
            },
            {
                text:
                    "⚖️ Install a fence, locks, and punish anyone caught strictly.",
                philosophy: "legalist",
                feedback:
                    "You apply law and punishment uniformly, regardless of circumstances."
            },
            {
                text:
                    "🌾 Organize the neighborhood to share resources fairly so no one steals.",
                philosophy: "mozi",
                feedback:
                    "You treat the root cause — unequal distribution — with practical community action."
            }
        ]
    },
    {
        title: "🎓 The Student Competition",
        text:
            "Two students in your garden school constantly compete. One studies hard; the other is naturally talented but lazy.\n\nHow do you handle this?",
        choices: [
            {
                text:
                    "📝 Give them both rigorous exams so only real skill is rewarded.",
                philosophy: "xunzi",
                feedback:
                    "You trust structured training and testing to reveal true merit."
            },
            {
                text:
                    "💚 Encourage the hard worker and gently inspire the lazy one to care.",
                philosophy: "mencius",
                feedback:
                    "You nourish the good impulses in both, trusting their sprouts."
            },
            {
                text:
                    "📜 Assign them roles based on their temperament, not raw talent.",
                philosophy: "confucius",
                feedback:
                    "You value proper placement in hierarchy over merit alone."
            },
            {
                text:
                    "🍃 Let them figure it out on their own; competition teaches itself.",
                philosophy: "laozi",
                feedback:
                    "You trust natural processes without imposing structure."
            },
            {
                text:
                    "🎨 Tell them the 'competition' is imaginary and both are already whole.",
                philosophy: "zhuangzi",
                feedback:
                    "You dissolve the premise of competition with perspective-shifting."
            },
            {
                text:
                    "⚖️ Rank them publicly and reward the top performer with privileges.",
                philosophy: "legalist",
                feedback:
                    "You use visible hierarchy and rewards to motivate behavior."
            }
        ]
    },
    {
        title: "🌸 The Festival Debate",
        text:
            "Your community debates: should the spring festival be lavish and traditional, or simple and practical?\n\nWhat position do you take?",
        choices: [
            {
                text:
                    "🏮 Keep it lavish, rituals bind the community and honor ancestors.",
                philosophy: "confucius",
                feedback:
                    "You defend ritual as the glue of social cohesion."
            },
            {
                text:
                    "🍚 Make it simple, feed everyone well instead of wasting money on decoration.",
                philosophy: "mozi",
                feedback:
                    "You prioritize practical benefit over ornamental ritual."
            },
            {
                text:
                    "🌊 Let each household celebrate as they wish; flow with diversity.",
                philosophy: "laozi",
                feedback:
                    "You avoid imposing one way, trusting spontaneous variety."
            },
            {
                text:
                    "🎪 Turn it into a playful experiment where people try opposite roles.",
                philosophy: "zhuangzi",
                feedback:
                    "You transform the debate into an exploration of perspective."
            },
            {
                text:
                    "⚖️ Mandate a standardized celebration with equal funding for all.",
                philosophy: "legalist",
                feedback:
                    "You enforce uniformity to avoid conflict and maintain control."
            },
            {
                text:
                    "🧘 Have a quiet meditation gathering instead of a loud festival.",
                philosophy: "inward",
                feedback:
                    "You turn the community inward, valuing stillness over spectacle."
            },
            {
                text:
                    "📚 Hold the traditional festival, but add classes teaching its meaning.",
                philosophy: "xunzi",
                feedback:
                    "You preserve ritual while adding educational reform."
            }
        ]
    }
];


// STATE
let currentScenario = 0;
let philosophyScores = {
    confucius: 0,
    mencius: 0,
    laozi: 0,
    zhuangzi: 0,
    mozi: 0,
    xunzi: 0,
    legalist: 0,
    inward: 0
};
let choiceHistory = [];


// SCROLL NAVIGATION
function scrollToSection(selector, smooth = false) {
    const section = document.querySelector(selector);
    if (section) {
        section.scrollIntoView({ behavior: smooth ? "smooth" : "auto" });
    }
}

function scrollToQuiz() {
    scrollToSection("#quiz");
}

function scrollToGrove() {
    scrollToSection("#grove");
}

// QUIZ LOGIC
function startQuiz() {
    currentScenario = 0;
    philosophyScores = {
        confucius: 0,
        mencius: 0,
        laozi: 0,
        zhuangzi: 0,
        mozi: 0,
        xunzi: 0,
        legalist: 0,
        inward: 0
    };
    choiceHistory = [];
    document.getElementById("results").classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");
    loadScenario();
    updateTreeStage();
}

function loadScenario() {
    const scenario = SCENARIOS[currentScenario];
    document.getElementById("scenario-title").textContent = scenario.title;
    document.getElementById("scenario-text").textContent = scenario.text;
    document.getElementById("scenario-number").textContent = currentScenario + 1;
    document.getElementById("scenario-total").textContent = SCENARIOS.length;

    const choicesContainer = document.getElementById("choices-container");
    choicesContainer.innerHTML = "";

    scenario.choices.forEach((choice, index) => {
        const btn = document.createElement("button");
        btn.className = "choice-btn";
        btn.textContent = choice.text;
        btn.onclick = () => selectChoice(index);
        choicesContainer.appendChild(btn);
    });

    updateProgressBar();
}

function selectChoice(index) {
    const scenario = SCENARIOS[currentScenario];
    const choice = scenario.choices[index];

    philosophyScores[choice.philosophy]++;
    choiceHistory.push({
        scenario: scenario.title,
        choice: choice.text,
        philosophy: choice.philosophy,
        feedback: choice.feedback
    });

    showFeedback(choice.feedback);
    
    setTimeout(() => {
        currentScenario++;
        if (currentScenario < SCENARIOS.length) {
            loadScenario();
            updateTreeStage();
        } else {
            showResults();
        }
    }, 400);
}

function showFeedback(text) {
    const insight = document.getElementById("story-insight");
    insight.textContent = text;
    insight.style.animation = "none";
    setTimeout(() => {
        insight.style.animation = "fadeIn 0.5s ease-out";
    }, 10);
}

function updateProgressBar() {
    const progress = ((currentScenario + 1) / SCENARIOS.length) * 100;
    document.getElementById("progress-fill").style.width = progress + "%";
}

function updateTreeStage() {
    const stage = TREE_STAGES[Math.min(currentScenario, TREE_STAGES.length - 1)];
    document.getElementById("story-tree-display").textContent = stage.emoji;
    document.getElementById("tree-stage-label").textContent = stage.label;
}

function showResults() {
    let winningPhil = Object.keys(philosophyScores)[0];
    let maxScore = philosophyScores[winningPhil];

    for (const [phil, score] of Object.entries(philosophyScores)) {
        if (score > maxScore) {
            maxScore = score;
            winningPhil = phil;
        }
    }

    const philosopher = PHILOSOPHERS[winningPhil];

    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("results").classList.remove("hidden");

    document.getElementById("results-tree-image").src = philosopher.treeImages.full;
    document.getElementById("results-philosophy-name").textContent = philosopher.name;
    document.getElementById("results-philosophy-type").textContent = philosopher.type;
    document.getElementById("results-tree-chinese").textContent = philosopher.chineseTree;
    document.getElementById("results-explanation-text").textContent = philosopher.description + "\n\n" + philosopher.extra;

    const summaryDiv = document.getElementById("choice-summary");
    summaryDiv.innerHTML = "";
    choiceHistory.forEach((item, i) => {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${item.scenario}:</strong> <em>${item.feedback}</em>`;
        summaryDiv.appendChild(p);
    });

    scrollToSection("#results");
}

function restartQuiz() {
    startQuiz();
    scrollToSection("#quiz");
}


// PHILOSOPHER CARDS & DETAIL VIEW
function showDetail(philId) {
    let phil = PHILOSOPHERS[philId];
    if (!phil) phil = PHILOSOPHERS.legalist;

    document.getElementById("detail-name").textContent = phil.name;
    document.getElementById("detail-type").textContent = phil.type;
    document.getElementById("detail-chinese").textContent = phil.chineseTree;
    document.getElementById("detail-description").textContent = phil.description;
    
    const extraDiv = document.getElementById("detail-extra");
    extraDiv.innerHTML = `
        <div class="evidence-section">
            <h4>🌳 Why This Tree?</h4>
            <p>${phil.treeRationale}</p>
        </div>
        <div class="evidence-section">
            <h4>📜 Textual Evidence</h4>
            <p>${phil.evidence}</p>
        </div>
        <div class="evidence-section">
            <h4>🎋 In Your Garden</h4>
            <p>${phil.extra}</p>
        </div>
    `;
    
    document.getElementById("detail-tree-image").src = phil.treeImages.full;

    document.getElementById("grove").classList.add("hidden");
    document.getElementById("philosopher-detail").classList.remove("hidden");
    scrollToSection("#philosopher-detail");
}

function hideDetail() {
    document.getElementById("philosopher-detail").classList.add("hidden");
    document.getElementById("grove").classList.remove("hidden");
    scrollToSection("#grove");
}

function selectPhilosopher(id) {
    showDetail(id);
}


// SCROLL DOTS
function updateScrollDots() {
    const sections = ["#hero", "#intro", "#grove", "#quiz", "#results"];
    let currentIndex = 0;
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach((selector, index) => {
        const section = document.querySelector(selector);
        if (section && !section.classList.contains('hidden') && scrollPosition >= section.offsetTop) {
            currentIndex = index;
        }
    });

    document.querySelectorAll(".scroll-dot").forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    });
}

window.addEventListener("scroll", updateScrollDots);
window.addEventListener("load", updateScrollDots);

document.querySelectorAll(".scroll-dot").forEach(dot => {
    dot.addEventListener("click", function() {
        const target = this.getAttribute("data-target");
        const targetSection = document.querySelector(target);
        if (targetSection && !targetSection.classList.contains('hidden')) {
            scrollToSection(target);
        }
    });
});


// PHILOSOPHER CARD CLICKS
document.querySelectorAll(".philosopher-card").forEach(card => {
    card.addEventListener("click", (e) => {
        // Prevent triggering if clicking on a mini-card
        if (e.target.closest(".mini-leg-card")) return;
        
        const philId = card.getAttribute("data-philosopher");
        showDetail(philId);
    });
});


// INITIALIZE
document.addEventListener("DOMContentLoaded", () => {
    startQuiz();
    updateScrollDots();
});