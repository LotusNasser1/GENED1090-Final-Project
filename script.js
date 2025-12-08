const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

// PHILOSOPHER DEFINITIONS WITH EVIDENCE
const PHILOSOPHERS = {
    confucius: {
        id: "confucius",
        name: "孔子 Confucius",
        type: "🌲 The Ceremonial Pine",
        chineseTree: "儀松 (Yí Sōng)",
        description:
            "Like a carefully pruned pine, Confucian cultivation is upright, layered, and structured. Ritual and patterned roles play keep the social world standing tall.",
        treeRationale: "Confucius is paired with a pine because pines are upright, evergreen, and grow through long, disciplined seasons. In early China they often stood near graves and ancestral halls as quiet symbols of continuity. In a similar way, Confucian self-cultivation emphasizes steady and ritualized practice that help the social world remain straight and enduring.",
        evidence: "Analects 2.4 maps Confucius’s own life as a series of cultivated stages: \\\"The Master said, 'At fifteen I set my mind upon learning; at thirty I took my place in society; at forty I became free of doubts; at fifty I understood Heaven’s Mandate; at sixty my ear was attuned; and at seventy I could follow my heart’s desires without overstepping the bounds of propriety.'\\\"<br><br>" +
        "This picture of step-by-step growth is very pine-like: ring after ring, layer after layer, each stage firmly rooted before the next. The tree metaphor shows how, for Confucius, a lifetime of ritual and learning slowly shapes a person so that even their spontaneous desires naturally stay within proper bounds.",
        extra:
             "In your garden choices, Confucian answers showed up when you prioritized proper form, respect for rank, and teaching people how to behave before simply helping them. You often wanted things to be done correctly as well as kindly.",
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
        treeRationale:
            "Mencius is paired with a fruit tree because his view of human nature begins with small, living sprouts that can ripen into something abundant. A peach starts as a tender bud that must be cared for as it grows; in time it becomes sweet fruit that others can enjoy. In the same way, Mencius thinks our inborn moral sprouts, when we take care of them and let them develop, they grow into full benevolence.",
        evidence:
            "From Mengzi 2A6: \\\"Humans all have hearts that are not unfeeling toward others.\\\" Mencius uses this to argue that we all have a heart of compassion, a moral \\\"sprout\\\" that can be developed into the virtue of benevolence.<br><br>" +
            "The Fruit-Bearer Peach picks up this sprout idea: the first stirrings of compassion are like tiny buds on a peach branch. With time and care, they can ripen into visible, generous fruit that others can share, just as cultivated benevolence overflows in concrete care for people.",
        extra:
            "In your garden choices, Mencian answers appeared when you trusted compassion first and only later thought about rules, reputation, or punishment. You tended to see basic decency as something already there that should be allowed to grow.",
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
            "Laozi’s willow bends instead of breaking. Its strength comes from softness and flexibility, following the Way rather than forcing outcomes.",
        treeRationale:
            "Laozi is paired with a willow because its branches are soft, hanging, and able to sway with wind and water. It doesn’t win by being rigid; it survives by yielding. That matches Laozi’s idea that real strength is found in softness, humility, and going with the natural flow (wu wei) rather than trying to stand stiff against it.",
        evidence:
            "From the Daodejing: Chapter 40 says, \\\"Turning back is how the Way moves; weakness is how the Way operates.\\\" Chapter 76 adds: \\\"When alive human beings are supple and weak; when dead they are stiff and strong… The stiff and the strong are the disciples of death; the supple and weak are the disciples of life.\\\" Chapter 78 then compares water to the softest thing in the world, yet able to overcome what is hard and strong.<br><br>" +
            "The yielding willow and the idea of wu wei go together here. The willow lives by bending with wind and rain instead of resisting them, just as wu wei means acting in a way that does not force or contend, like water finding its path. For Laozi, this kind of softness and non-coercive action is the living strength that endures where hard, rigid things eventually break.",
        extra:
            "In your garden choices, Laozi showed up when you stepped back, did less, or let things resolve on their own instead of pushing harder. Those moments of letting things flow were your moves in the direction of wu wei.",
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
            "Zhuangzi loves the strange and the untamed. His oak is the one carpenters call ‘useless,’ so it’s left alone to grow in its own odd way.",
        treeRationale:
            "Zhuangzi is paired with a gnarled oak because, in his stories, this particular tree is too twisted and uneven for standard lumber. Carpenters judge it ‘useless’ for their work, so no one bothers to cut it down. That matches Zhuangzi’s interest in lives and ways of being that fall outside normal standards but end up freer and less controlled.",
        evidence:
            "From the Zhuangzi, Huizi says to Zhuangzi: \\\"I have a big tree. Its trunk is so gnarled it won't take a chalk line, and its branches are so twisted they won't fit a compass or square… Your talk is similarly big and useless.\\\"<br><br>" +
            "Zhuangzi answers that a tree like this could be planted in open ground, where you simply wander around it or lie down and rest in its shade. Because its wood is no good for straight boards and tools, no one cuts it, and it is able to live out its full span. The Useless Gnarled Oak in your garden comes from this story: the very features that make it ‘useless’ to carpenters are what keep it from being chopped up. Zhuangzi uses this to question ordinary ideas of usefulness and to show how not fitting into fixed roles can leave a person or thing less used up by the world.",
        extra:
            "In your garden choices, Zhuangzi appeared when you questioned ordinary assumptions, refused to treat everything as a tool or a metric, or turned a problem into a chance to see things from a different angle instead of just trying to fix it.",
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
            "Mozi’s tree is practical and generous. The mulberry is useful to ordinary people: shade, leaves, fruit, benefits that can be measured.",
        treeRationale:
            "Mozi is paired with a mulberry because it is a work tree, not a show tree. Mulberries feed silkworms, clothe people, give fruit, and offer shade to those working the fields. They are planted for what they do for common people, not for ceremony or display. That matches Mozi’s focus on usefulness and on policies that bring measurable benefit to the many rather than glory to the few.",
        evidence:
            "From the Mozi, in the chapters on Moderation in Expenditures: \\\"The sage-kings never add anything that is not useful. And so they never waste their resources or overburden their people yet are able to generate great benefits… To eliminate everything that is not useful is to carry out the Way of the sage-kings and offer great benefit to the world.\\\"<br><br>" +
            "The Productive Mulberry turns this standard into a tree. It is not prized for luxury or ornament; its value lies in steady, practical returns. In the same way, Mozi measures teachings and policies by how much concrete benefit they produce for ordinary people and cuts away what is merely decorative or wasteful.",
        extra:
            "In your garden choices, Mozi showed up when you cared about equal distribution, community benefit, and avoiding wasteful luxury so that basic needs could be met.",
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
        "For Xunzi, raw human nature is like crooked wood. It only becomes upright and beautiful through long, deliberate training in ritual and standards.",
    treeRationale:
        "Xunzi is paired with a bonsai because bonsai trees do not end up in their shape by themselves. A bonsai master wires, trims, and bends the branches over many years until they hold a carefully trained form. That matches Xunzi’s claim that goodness is not natural but produced by sustained, external discipline from teachers and law.",
    evidence:
        "From the Xunzi, Chapter 23: \\\"Crooked wood must await steaming and straightening on the shaping frame, and only then does it become straight.… Now since people’s nature is bad, they must await teachers and proper models, and only then do they become correct in their behavior. They must obtain ritual and the standards of righteousness, and only then do they become well ordered.\\\"<br><br>" +
        "The bonsai makes this image concrete. In Xunzi’s metaphor, human nature is the crooked wood; teachers and standards are like the shaping frame and tools in the hands of a bonsai master. A bonsai shows how years of guided cutting and bending can turn a wild branch into a precise form. For Xunzi, moral cultivation works the same way: goodness is a crafted shape imposed on our nature by long practice, not something that grows straight on its own.",
    extra:
        "In your garden choices, Xunzi showed up when you emphasized training, correction, exams, and firm structure as the way people improve, rather than trusting spontaneous goodness or gentle guidance.",
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
    type: "📏 The Measured Hedge",
    chineseTree: "量法籬 (Liáng Fǎ Lí)",
    description:
        "Lord Shang’s part of the hedge is cut to exact heights and thicknesses. Every segment is judged by fixed standards, and anything that sticks out gets trimmed back.",
    treeRationale:
        "Lord Shang is paired with a measured hedge section because his reforms turn people into units that can be ranked and compared by clear, external standards. He wants fixed laws, fixed quotas for grain, and fixed scales of military merit so the ruler can see at a glance who measures up. A hedge cut along a ruler’s line, each plant forced into the same shape, matches this vision of a population organized by measurement and punishment.",
    evidence:
        "From the Book of Lord Shang, in the discussion of unified rewards: \\\"What I mean by the unifying of rewards is that profits and emoluments, office and rank, should be determined exclusively by military merit, and that there should not be different reasons for distributing them.\\\"<br><br>" +
        "Here Lord Shang insists that all honors and material rewards must be tied to one measurable standard: military achievement. The Measured Hedge Section turns this into a visual: each hedge-plant stands in a row, its value checked against the same ruler. There is no room for soft factors like learning, ritual, or personal virtue, only what can be counted. Any branch that fails to match the line is cut back, just as any person who does not fit the law and quota system is punished.",
    extra:
        "In your garden choices, Lord Shang showed up when you emphasized strict standards, group responsibility, and hard incentives over feelings, relationships, or tradition.",
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
        "Han Feizi’s bamboo looks simple from a distance, but up close it is a hard, jointed stalk with an empty center, standing in a tight grove of similar stems.",
    treeRationale:
        "Han Feizi is paired with bamboo because bamboo grows in clear, separate segments around a hollow core. The joints are firm points where the stalk can be cut or controlled, while the inside stays empty and hidden. This matches his vision of rulership: a few hard, external handles of law, punishment, and reward that everyone feels, combined with a ruler who remains inwardly opaque, letting the system rather than himself do the work.",
    evidence:
        "From Han Feizi, “The Way of the Ruler”: \\\"The Way [of the ruler] lies in what cannot be seen; its use lies in what cannot be understood. Be empty and tranquil without engaging in affairs, and from the darkness observe others’ faults. Observe but do not be observed; listen but do not be heard; understand but do not be understood… Discard your knowledge, leave behind your ability, and those below will be unable to understand your intentions.\\\"<br><br>" +
        "The Strategic Bamboo turns this into a tree image. The ruler’s advice to be empty and tranquil and hard to read is like the hollow center of a bamboo stalk: the real core is hidden from view. At the same time, the visible segments are like his fixed laws and techniques, clear outer structure that channels power and behavior. Each joint is a control point, just as Han Feizi thinks the ruler should tightly hold a few key handles of punishment and favor while keeping his own mind concealed. The bamboo grove thus captures a world where order comes from a rigid, segmented system surrounding an unreadable center.",
    extra:
        "In your garden choices, Han Feizi appeared when you focused on who actually controls rewards and punishments, and when you preferred tight systems that work even if the person at the top stays distant and hard to read.",
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
        "Inward Training focuses on quiet breath, aligned posture, and settled vital energy. Like a luminous bodhi tree, transformation begins in hidden roots and shows up as a calm, steady presence.",
    treeRationale:
        "Inward Training is paired with a bodhi-like tree because it imagines change starting from the inside out. A bodhi tree sinks roots into a deep, unseen source and then offers wide, cool shade. In the same way, the text emphasizes aligning the body, calming the heart-mind, and gathering vital essence within so that clarity and stability naturally show up on the outside.",
    evidence:
        "From Inward Training Chapter 8: \\\"If you can be aligned and tranquil, only then can you be stable. With a stable heart at your core, your ears and eyes will be acute and clear, and your four limbs firm and steady; you can thereby make a dwelling place for vital essence.\\\"<br><br>" +
        "The Luminous Bodhi turns this inner–outer pattern into a tree image. Inner alignment and tranquility are like the deep roots and hidden water source; the clear senses and firm limbs are like the strong trunk and spreading branches. For Inward Training, real cultivation is about quietly arranging breath, posture, and heart-mind so that a stable inner source can sustain everything that grows from it, the way a bodhi tree’s unseen roots support its calm, sheltering canopy.",
    extra:
        "In your garden choices, Inward Training appeared when you chose stillness, breathing, or inner alignment over punishment, persuasion, or external control. You were most drawn to tending the inner atmosphere first and letting your actions flow from there.",
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
    if (card.classList.contains("legalist-card")) return;

    card.addEventListener("click", () => {
        const philId = card.getAttribute("data-philosopher");
        showDetail(philId);
    });
});


// INITIALIZE
document.addEventListener("DOMContentLoaded", () => {
    startQuiz();
    updateScrollDots();
});