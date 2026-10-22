// ── Knowledge Base ──────────────────────────────────────────────────
const TOPICS = {
  nouns: {
    title: "Nouns 🏷️",
    intro: "A <strong>noun</strong> is a word for a person, place, animal, or thing.",
    facts: [
      "Nouns can be <strong>common</strong> (dog, city) or <strong>proper</strong> (London, Bella).",
      "Proper nouns always start with a <strong>capital letter</strong>.",
      "A <strong>plural noun</strong> names more than one thing. Most plurals add <strong>-s</strong> or <strong>-es</strong>.",
      "Some nouns have <strong>irregular plurals</strong>: child → children, mouse → mice, tooth → teeth.",
    ],
    examples: [
      "The <u>dog</u> chased the <u>ball</u>.",
      "<u>London</u> is a big <u>city</u>.",
      "Three <u>mice</u> ran across the <u>floor</u>.",
    ],
  },
  verbs: {
    title: "Verbs ⚡",
    intro: "A <strong>verb</strong> is an action or 'doing' word — it tells us what someone or something does.",
    facts: [
      "Every sentence needs a verb! Without it, a sentence is incomplete.",
      "Verbs change with <strong>tense</strong>: run (present) → ran (past) → will run (future).",
      "Some verbs are <strong>irregular</strong>: go → went, eat → ate, see → saw.",
      "A <strong>verb phrase</strong> can include a helping verb: She <u>is running</u>. They <u>have eaten</u>.",
    ],
    examples: [
      "The children <u>jumped</u> over the puddle.",
      "She <u>is reading</u> a book right now.",
      "He <u>went</u> to school early.",
    ],
  },
  adjectives: {
    title: "Adjectives 🎨",
    intro: "An <strong>adjective</strong> describes a noun — it tells us more about a person, place, or thing.",
    facts: [
      "Adjectives usually come <strong>before</strong> the noun: a <u>happy</u> puppy.",
      "They can also come <strong>after</strong> a verb like 'is' or 'seems': The sky <u>is blue</u>.",
      "We can <strong>compare</strong> with adjectives: fast → faster → fastest.",
      "Adjectives can describe <strong>colour, size, shape, feeling</strong>, and much more!",
    ],
    examples: [
      "The <u>tiny</u>, <u>fluffy</u> kitten slept on the <u>warm</u> blanket.",
      "That was the <u>funniest</u> joke I have ever heard.",
      "She felt <u>excited</u> on her <u>first</u> day.",
    ],
  },
  punctuation: {
    title: "Punctuation ✏️",
    intro: "<strong>Punctuation</strong> marks are symbols that help readers understand your writing.",
    facts: [
      "A <strong>full stop (.)</strong> ends a statement sentence.",
      "A <strong>question mark (?)</strong> ends a question.",
      "An <strong>exclamation mark (!)</strong> shows strong feeling or surprise.",
      "A <strong>comma (,)</strong> separates items in a list or adds a pause.",
      "An <strong>apostrophe (')</strong> shows belonging (dog's bone) or a missing letter (don't).",
      "Inverted commas (<strong>\" \"</strong>) show direct speech: She said, \"Hello!\"",
    ],
    examples: [
      "I like cats, dogs, and rabbits.",
      "\"Come here!\" shouted the teacher.",
      "The boy's bag was lost.",
    ],
  },
};

// ── Past-Tense Lookup Table ──────────────────────────────────────────
// Each entry: [base form, past tense, "regular" | "irregular"]
const PAST_TENSE_TABLE = [
  // Irregular verbs (common primary-school level)
  ["be",      "was / were",  "irregular"],
  ["beat",    "beat",        "irregular"],
  ["become",  "became",      "irregular"],
  ["begin",   "began",       "irregular"],
  ["bite",    "bit",         "irregular"],
  ["blow",    "blew",        "irregular"],
  ["break",   "broke",       "irregular"],
  ["bring",   "brought",     "irregular"],
  ["build",   "built",       "irregular"],
  ["buy",     "bought",      "irregular"],
  ["catch",   "caught",      "irregular"],
  ["choose",  "chose",       "irregular"],
  ["come",    "came",        "irregular"],
  ["cut",     "cut",         "irregular"],
  ["do",      "did",         "irregular"],
  ["draw",    "drew",        "irregular"],
  ["drink",   "drank",       "irregular"],
  ["drive",   "drove",       "irregular"],
  ["eat",     "ate",         "irregular"],
  ["fall",    "fell",        "irregular"],
  ["feel",    "felt",        "irregular"],
  ["fight",   "fought",      "irregular"],
  ["find",    "found",       "irregular"],
  ["fly",     "flew",        "irregular"],
  ["forget",  "forgot",      "irregular"],
  ["get",     "got",         "irregular"],
  ["give",    "gave",        "irregular"],
  ["go",      "went",        "irregular"],
  ["grow",    "grew",        "irregular"],
  ["have",    "had",         "irregular"],
  ["hear",    "heard",       "irregular"],
  ["hide",    "hid",         "irregular"],
  ["hit",     "hit",         "irregular"],
  ["hold",    "held",        "irregular"],
  ["hurt",    "hurt",        "irregular"],
  ["keep",    "kept",        "irregular"],
  ["know",    "knew",        "irregular"],
  ["lead",    "led",         "irregular"],
  ["leave",   "left",        "irregular"],
  ["let",     "let",         "irregular"],
  ["lose",    "lost",        "irregular"],
  ["make",    "made",        "irregular"],
  ["meet",    "met",         "irregular"],
  ["put",     "put",         "irregular"],
  ["read",    "read",        "irregular"],
  ["ride",    "rode",        "irregular"],
  ["ring",    "rang",        "irregular"],
  ["rise",    "rose",        "irregular"],
  ["run",     "ran",         "irregular"],
  ["say",     "said",        "irregular"],
  ["see",     "saw",         "irregular"],
  ["sell",    "sold",        "irregular"],
  ["send",    "sent",        "irregular"],
  ["show",    "showed",      "irregular"],
  ["sing",    "sang",        "irregular"],
  ["sit",     "sat",         "irregular"],
  ["sleep",   "slept",       "irregular"],
  ["speak",   "spoke",       "irregular"],
  ["spend",   "spent",       "irregular"],
  ["stand",   "stood",       "irregular"],
  ["swim",    "swam",        "irregular"],
  ["take",    "took",        "irregular"],
  ["teach",   "taught",      "irregular"],
  ["tell",    "told",        "irregular"],
  ["think",   "thought",     "irregular"],
  ["throw",   "threw",       "irregular"],
  ["understand","understood","irregular"],
  ["wake",    "woke",        "irregular"],
  ["wear",    "wore",        "irregular"],
  ["win",     "won",         "irregular"],
  ["write",   "wrote",       "irregular"],
  // Regular verbs (common primary-school level)
  ["ask",     "asked",       "regular"],
  ["bake",    "baked",       "regular"],
  ["call",    "called",      "regular"],
  ["clean",   "cleaned",     "regular"],
  ["climb",   "climbed",     "regular"],
  ["close",   "closed",      "regular"],
  ["cook",    "cooked",      "regular"],
  ["cry",     "cried",       "regular"],
  ["dance",   "danced",      "regular"],
  ["drop",    "dropped",     "regular"],
  ["dry",     "dried",       "regular"],
  ["enjoy",   "enjoyed",     "regular"],
  ["fix",     "fixed",       "regular"],
  ["help",    "helped",      "regular"],
  ["jump",    "jumped",      "regular"],
  ["kick",    "kicked",      "regular"],
  ["laugh",   "laughed",     "regular"],
  ["learn",   "learned",     "regular"],
  ["like",    "liked",       "regular"],
  ["listen",  "listened",    "regular"],
  ["live",    "lived",       "regular"],
  ["look",    "looked",      "regular"],
  ["love",    "loved",       "regular"],
  ["move",    "moved",       "regular"],
  ["open",    "opened",      "regular"],
  ["paint",   "painted",     "regular"],
  ["pick",    "picked",      "regular"],
  ["play",    "played",      "regular"],
  ["pull",    "pulled",      "regular"],
  ["push",    "pushed",      "regular"],
  ["shout",   "shouted",     "regular"],
  ["skip",    "skipped",     "regular"],
  ["smile",   "smiled",      "regular"],
  ["start",   "started",     "regular"],
  ["stop",    "stopped",     "regular"],
  ["talk",    "talked",      "regular"],
  ["try",     "tried",       "regular"],
  ["turn",    "turned",      "regular"],
  ["use",     "used",        "regular"],
  ["visit",   "visited",     "regular"],
  ["wait",    "waited",      "regular"],
  ["walk",    "walked",      "regular"],
  ["want",    "wanted",      "regular"],
  ["wash",    "washed",      "regular"],
  ["watch",   "watched",     "regular"],
  ["work",    "worked",      "regular"],
];

// Build a quick-lookup map: base → { past, type }
const PAST_TENSE_MAP = {};
for (const [base, past, type] of PAST_TENSE_TABLE) {
  PAST_TENSE_MAP[base] = { past, type };
}

/**
 * Try to answer a past-tense question.
 * Recognises patterns like:
 *   "what is the past tense of go"
 *   "past tense of eat"
 *   "how do you say went" (reverse lookup)
 *   "is went irregular"
 *   "went past tense"
 * Returns an HTML string, or null if no match.
 */
function detectPastTenseQuestion(text) {
  const lower = text.toLowerCase().trim();

  // ── Pattern 1: "past tense of <verb>" / "what is the past tense of <verb>"
  const ofMatch = lower.match(/past\s+tense\s+of\s+([a-z]+)/);
  if (ofMatch) return buildPastTenseAnswer(ofMatch[1]);

  // ── Pattern 2: "<verb> past tense" e.g. "go past tense"
  const preMatch = lower.match(/^([a-z]+)\s+past\s+tense/);
  if (preMatch) return buildPastTenseAnswer(preMatch[1]);

  // ── Pattern 3: "what is the past of <verb>"
  const pastOfMatch = lower.match(/past\s+of\s+([a-z]+)/);
  if (pastOfMatch) return buildPastTenseAnswer(pastOfMatch[1]);

  // ── Pattern 4: "how do you say <verb> in past tense"
  const howMatch = lower.match(/how\s+do\s+you\s+(?:say|write)\s+([a-z]+)/);
  if (howMatch) return buildPastTenseAnswer(howMatch[1]);

  // ── Pattern 5: "is <verb> regular or irregular" / "is <verb> irregular"
  const isIrregMatch = lower.match(/is\s+([a-z]+)\s+(?:a\s+)?(?:regular|irregular)/);
  if (isIrregMatch) return buildPastTenseAnswer(isIrregMatch[1]);

  // ── Pattern 6: reverse lookup — pupil types a past form, e.g. "what verb is went"
  const reverseMatch = lower.match(/(?:what\s+(?:verb|word)\s+is|base\s+(?:form|word)\s+of)\s+([a-z]+)/);
  if (reverseMatch) {
    const answer = reverseLookup(reverseMatch[1]);
    if (answer) return answer;
  }

  // ── Pattern 7: bare past-tense word typed alone or with "?" e.g. "went?"
  // Only fire for single-word inputs so we don't swallow other questions
  const bareWord = lower.replace(/[^a-z]/g, "");
  if (bareWord === lower.replace(/[^a-z?]/g, "").replace(/\?/g, "") && bareWord.length > 1) {
    const reverse = reverseLookup(bareWord);
    if (reverse) return reverse;
  }

  return null; // no past-tense pattern found
}

/** Build the reply HTML for a given base verb. */
function buildPastTenseAnswer(verb) {
  verb = verb.toLowerCase().trim();
  const entry = PAST_TENSE_MAP[verb];
  if (!entry) return null; // verb not in our table

  const { past, type } = entry;
  const typeLabel = type === "irregular"
    ? "an <strong>irregular</strong> verb — its past tense doesn't follow the normal <em>-ed</em> rule"
    : "a <strong>regular</strong> verb — it follows the normal <em>-ed</em> rule";

  return (
    `The past tense of <strong>${verb}</strong> is <strong>${past}</strong>. ⏪<br><br>` +
    `<em>${verb.charAt(0).toUpperCase() + verb.slice(1)}</em> is ${typeLabel}.<br><br>` +
    `📖 Example: <span style="font-style:italic">Yesterday, I <u>${past}</u> to the park.</span>`
  );
}

/** Reverse-lookup: given a past-tense form, find the base verb. */
function reverseLookup(pastForm) {
  pastForm = pastForm.toLowerCase().trim();
  for (const [base, past] of PAST_TENSE_TABLE) {
    // past may contain " / " (e.g. "was / were") — check both halves
    const forms = past.split("/").map(f => f.trim());
    if (forms.includes(pastForm)) {
      return (
        `<strong>${pastForm}</strong> is the past tense of <strong>${base}</strong>. ⏪<br><br>` +
        `📖 Example: <span style="font-style:italic">Yesterday, I <u>${pastForm}</u>.</span>`
      );
    }
  }
  return null;
}

// ── Present-Tense Knowledge ──────────────────────────────────────────
const PRESENT_TENSE_QA = [
  {
    // "how many present tenses are there" / "types of present tense" / "present tense forms"
    patterns: [
      /how\s+many\s+present\s+tenses/,
      /types?\s+of\s+present\s+tense/,
      /present\s+tense\s+forms?/,
      /present\s+tenses?\s+in\s+english/,
      /different\s+present\s+tenses?/,
    ],
    answer:
      `There are <strong>four present tenses</strong> commonly taught in English: 🕐<br><br>` +
      `<strong>1. Simple Present</strong> — for habits and facts.<br>` +
      `<span style="font-style:italic;margin-left:1em">📖 She <u>walks</u> to school every day.</span><br><br>` +
      `<strong>2. Present Continuous</strong> — for something happening right now.<br>` +
      `<span style="font-style:italic;margin-left:1em">📖 She <u>is walking</u> to school now.</span><br><br>` +
      `<strong>3. Present Perfect</strong> — for something that happened and is still relevant.<br>` +
      `<span style="font-style:italic;margin-left:1em">📖 She <u>has walked</u> to school many times.</span><br><br>` +
      `<strong>4. Present Perfect Continuous</strong> — for something that started in the past and is still going on.<br>` +
      `<span style="font-style:italic;margin-left:1em">📖 She <u>has been walking</u> for ten minutes.</span>`,
  },
  {
    // "what is the simple present tense" / "explain simple present"
    patterns: [
      /simple\s+present/,
      /present\s+simple/,
    ],
    answer:
      `The <strong>Simple Present</strong> tense is used for habits, routines, and facts. 🔄<br><br>` +
      `We form it with the <strong>base form</strong> of the verb (add <strong>-s</strong> or <strong>-es</strong> for he/she/it).<br><br>` +
      `📖 Examples:<br>` +
      `<span style="font-style:italic">I <u>play</u> football. &nbsp;|&nbsp; She <u>plays</u> football. &nbsp;|&nbsp; The sun <u>rises</u> in the east.</span>`,
  },
  {
    // "what is the present continuous tense"
    patterns: [
      /present\s+continuous/,
      /present\s+progressive/,
    ],
    answer:
      `The <strong>Present Continuous</strong> tense is used for something happening <strong>right now</strong> or around now. ▶️<br><br>` +
      `We form it with <strong>is / am / are</strong> + the verb + <strong>-ing</strong>.<br><br>` +
      `📖 Examples:<br>` +
      `<span style="font-style:italic">I <u>am reading</u> a book. &nbsp;|&nbsp; She <u>is singing</u>. &nbsp;|&nbsp; They <u>are playing</u>.</span>`,
  },
  {
    // "what is the present perfect tense"
    patterns: [
      /present\s+perfect\s+continuous/,
      /present\s+perfect/,
    ],
    answer:
      `The <strong>Present Perfect</strong> tense connects the past to the present. 🔗<br><br>` +
      `We form it with <strong>has / have</strong> + the <strong>past participle</strong> of the verb.<br><br>` +
      `📖 Examples:<br>` +
      `<span style="font-style:italic">I <u>have finished</u> my homework. &nbsp;|&nbsp; She <u>has seen</u> that film.</span>`,
  },
  {
    // "what is the present tense" (generic — must come after the specific ones above)
    patterns: [
      /what\s+is\s+(?:the\s+)?present\s+tense/,
      /(?:explain|tell\s+me\s+about)\s+(?:the\s+)?present\s+tense/,
    ],
    answer:
      `The <strong>present tense</strong> tells us about something happening <strong>now</strong> or as a general fact. 🕐<br><br>` +
      `English has <strong>four present tenses</strong>: Simple Present, Present Continuous, Present Perfect, and Present Perfect Continuous.<br><br>` +
      `Try asking me about each one, for example: <em>"What is the simple present tense?"</em>`,
  },
];

/**
 * Detect and answer present-tense questions.
 * Returns HTML string or null.
 */
function detectPresentTenseQuestion(text) {
  const lower = text.toLowerCase().trim();
  // Must contain "present" to avoid false matches
  if (!lower.includes("present")) return null;

  for (const entry of PRESENT_TENSE_QA) {
    if (entry.patterns.some(p => p.test(lower))) {
      return entry.answer;
    }
  }
  return null;
}

// ── General Grammar Q&A ───────────────────────────────────────────────
// Answers direct "what is a …?" questions precisely,
// without triggering the rotating-fact topic system.
const GRAMMAR_QA = [
  {
    patterns: [/what\s+is\s+(?:a\s+)?(?:an?\s+)?irregular\s+verb/, /irregular\s+verbs?\s+(?:mean|definition|explain)/],
    answer:
      `An <strong>irregular verb</strong> is a verb whose past tense does <strong>not</strong> follow the normal <em>-ed</em> rule. 🔀<br><br>` +
      `You have to learn these specially!<br><br>` +
      `📖 Examples:<br>` +
      `<span style="font-style:italic">go → <u>went</u> &nbsp;|&nbsp; eat → <u>ate</u> &nbsp;|&nbsp; run → <u>ran</u> &nbsp;|&nbsp; see → <u>saw</u></span><br><br>` +
      `Ask me <em>"What is the past tense of go?"</em> to look up any verb!`,
  },
  {
    patterns: [/what\s+is\s+(?:a\s+)?(?:an?\s+)?regular\s+verb/, /regular\s+verbs?\s+(?:mean|definition|explain)/],
    answer:
      `A <strong>regular verb</strong> forms its past tense by adding <strong>-ed</strong> (or just <strong>-d</strong> if it already ends in e). ✅<br><br>` +
      `📖 Examples:<br>` +
      `<span style="font-style:italic">walk → <u>walked</u> &nbsp;|&nbsp; jump → <u>jumped</u> &nbsp;|&nbsp; dance → <u>danced</u> &nbsp;|&nbsp; play → <u>played</u></span>`,
  },
  {
    patterns: [/what\s+is\s+(?:a\s+)?verb/, /what\s+are\s+verbs?/],
    answer:
      `A <strong>verb</strong> is an action or 'doing' word — it tells us what someone or something does. ⚡<br><br>` +
      `Every sentence needs a verb to be complete!<br><br>` +
      `📖 Examples:<br>` +
      `<span style="font-style:italic">The children <u>jumped</u>. &nbsp;|&nbsp; She <u>is reading</u>. &nbsp;|&nbsp; He <u>went</u> home.</span>`,
  },
  {
    patterns: [/what\s+is\s+(?:an?\s+)?adjective/, /what\s+are\s+adjectives?/],
    answer:
      `An <strong>adjective</strong> is a describing word — it tells us more about a noun. 🎨<br><br>` +
      `📖 Examples:<br>` +
      `<span style="font-style:italic">a <u>tiny</u> mouse &nbsp;|&nbsp; the <u>bright</u> sun &nbsp;|&nbsp; she felt <u>happy</u></span>`,
  },
  {
    patterns: [/what\s+is\s+(?:a\s+)?noun/, /what\s+are\s+nouns?/],
    answer:
      `A <strong>noun</strong> is a word for a person, place, animal, or thing. 🏷️<br><br>` +
      `📖 Examples:<br>` +
      `<span style="font-style:italic"><u>dog</u>, <u>London</u>, <u>happiness</u>, <u>teacher</u></span>`,
  },
  {
    patterns: [/what\s+is\s+(?:a\s+)?(?:proper\s+noun)/, /what\s+are\s+proper\s+nouns?/],
    answer:
      `A <strong>proper noun</strong> is the specific name of a person, place, or thing — it always starts with a <strong>capital letter</strong>. 🔠<br><br>` +
      `📖 Examples:<br>` +
      `<span style="font-style:italic"><u>London</u>, <u>Emma</u>, <u>Monday</u>, <u>Christmas</u></span>`,
  },
  {
    patterns: [/what\s+is\s+(?:an?\s+)?apostrophe/, /when\s+(?:do\s+(?:we|you|i)\s+use|to\s+use)\s+(?:an?\s+)?apostrophe/],
    answer:
      `An <strong>apostrophe (')</strong> is used in two ways: ✏️<br><br>` +
      `<strong>1. To show belonging:</strong> <span style="font-style:italic">the <u>dog's</u> bone (the bone belongs to the dog)</span><br><br>` +
      `<strong>2. To show a missing letter (contraction):</strong> <span style="font-style:italic"><u>don't</u> = do not &nbsp;|&nbsp; <u>I'm</u> = I am</span>`,
  },
  {
    patterns: [/what\s+is\s+(?:a\s+)?comma/, /when\s+(?:do\s+(?:we|you|i)\s+use|to\s+use)\s+(?:a\s+)?comma/],
    answer:
      `A <strong>comma (,)</strong> is used to separate items in a list, or to add a pause in a sentence. ✏️<br><br>` +
      `📖 Examples:<br>` +
      `<span style="font-style:italic">I like cats<u>,</u> dogs<u>,</u> and rabbits.</span><br>` +
      `<span style="font-style:italic">After dinner<u>,</u> we watched a film.</span>`,
  },
  {
    patterns: [/what\s+is\s+(?:a\s+)?(?:full\s+stop)/, /when\s+(?:do\s+(?:we|you|i)\s+use|to\s+use)\s+(?:a\s+)?full\s+stop/],
    answer:
      `A <strong>full stop (.)</strong> goes at the end of a statement sentence to show it has finished. ✏️<br><br>` +
      `📖 Example: <span style="font-style:italic">The cat sat on the mat<u>.</u></span>`,
  },
  {
    patterns: [/what\s+is\s+(?:a\s+|an?\s+|the\s+)?(?:past\s+tense|simple\s+past)/, /(?:explain|tell\s+me\s+about)\s+(?:the\s+)?(?:past\s+tense|simple\s+past)/],
    answer:
      `The <strong>past tense</strong> tells us about something that has <strong>already happened</strong>. ⏪<br><br>` +
      `Regular verbs add <strong>-ed</strong>: walk → <u>walked</u>, jump → <u>jumped</u>.<br>` +
      `Irregular verbs change differently: go → <u>went</u>, eat → <u>ate</u>, run → <u>ran</u>.<br><br>` +
      `Ask me <em>"What is the past tense of [verb]?"</em> to look up any verb!`,
  },
  {
    patterns: [/what\s+is\s+(?:a\s+|an?\s+|the\s+)?(?:future\s+tense)/, /(?:explain|tell\s+me\s+about)\s+(?:the\s+)?future\s+tense/],
    answer:
      `The <strong>future tense</strong> tells us about something that <strong>has not happened yet</strong>. 🔮<br><br>` +
      `In English, we often use <strong>will</strong> + verb, or <strong>going to</strong> + verb.<br><br>` +
      `📖 Examples:<br>` +
      `<span style="font-style:italic">I <u>will go</u> to the park tomorrow.</span><br>` +
      `<span style="font-style:italic">She <u>is going to</u> eat her lunch.</span>`,
  },
];

/**
 * Detect a direct grammar definition or explanation question.
 * Returns HTML string or null.
 */
function detectGrammarQuestion(text) {
  const lower = text.toLowerCase().trim();
  for (const entry of GRAMMAR_QA) {
    if (entry.patterns.some(p => p.test(lower))) {
      return entry.answer;
    }
  }
  return null;
}

// ── Quiz Bank ────────────────────────────────────────────────────────
const QUIZ_BANK = [
  {
    q: "Which word is a <strong>noun</strong>?",
    options: ["quickly", "elephant", "jump", "bright"],
    answer: 1,
    explanation: "<strong>Elephant</strong> is a noun — it's the name of an animal! 🐘",
  },
  {
    q: "Which word is a <strong>verb</strong>?",
    options: ["happy", "garden", "dance", "blue"],
    answer: 2,
    explanation: "<strong>Dance</strong> is a verb — it's an action word! 💃",
  },
  {
    q: "Which word is an <strong>adjective</strong>?",
    options: ["run", "slowly", "tiny", "London"],
    answer: 2,
    explanation: "<strong>Tiny</strong> is an adjective — it describes how small something is! 🔍",
  },
  {
    q: "What punctuation ends a <strong>question</strong>?",
    options: ["Full stop (.)", "Comma (,)", "Question mark (?)", "Apostrophe (')"],
    answer: 2,
    explanation: "A <strong>question mark (?)</strong> always goes at the end of a question! ❓",
  },
  {
    q: "What is the <strong>plural</strong> of <em>child</em>?",
    options: ["childs", "childes", "children", "childer"],
    answer: 2,
    explanation: "<strong>Children</strong> is the irregular plural of child. 👧👦",
  },
  {
    q: "Choose the sentence with the correct <strong>apostrophe</strong>:",
    options: ["The dogs bone.", "The dog's bone.", "The dogs' bone's.", "The dog bone's."],
    answer: 1,
    explanation: "<strong>The dog's bone</strong> — the apostrophe shows the bone belongs to the dog! 🦴",
  },
  {
    q: "Which sentence uses the <strong>past tense</strong>?",
    options: ["She runs fast.", "She will run fast.", "She ran fast.", "She is running fast."],
    answer: 2,
    explanation: "<strong>Ran</strong> is the past tense of 'run'. ⏪",
  },
  {
    q: "Which word best fills the gap? The sky was ___ and clear.",
    options: ["running", "beautiful", "eat", "quickly"],
    answer: 1,
    explanation: "<strong>Beautiful</strong> is an adjective — it describes the sky! ☀️",
  },
];

// ── Helper Utilities ─────────────────────────────────────────────────
const chatWindow = document.getElementById("chat-window");
const userInput  = document.getElementById("user-input");
const sendBtn    = document.getElementById("send-btn");

let quizIndex     = 0;   // which question is active
let quizActive    = false;
let factIndex     = {};  // tracks how many facts shown per topic

function scrollBottom() {
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

/** Create and append a message bubble */
function addMessage(html, role = "buddy") {
  const div = document.createElement("div");
  div.className = `msg ${role}`;

  const label = document.createElement("div");
  label.className = "sender";
  label.textContent = role === "buddy" ? "🦉 Buddy" : "You";

  const body = document.createElement("div");
  body.innerHTML = html;

  div.appendChild(label);
  div.appendChild(body);
  chatWindow.appendChild(div);
  scrollBottom();
  return div;
}

/** Add a highlighted example block inside an existing bubble */
function addExample(text, parentDiv) {
  const ex = document.createElement("div");
  ex.className = "example";
  ex.innerHTML = text;
  parentDiv.querySelector("div:last-child").appendChild(ex);
  scrollBottom();
}

// ── Topic Explanations ───────────────────────────────────────────────
function showTopic(key) {
  const topic = TOPICS[key];
  if (!topic) return;

  quizActive = false;
  if (!(key in factIndex)) factIndex[key] = 0;

  const idx  = factIndex[key];
  const fact = topic.facts[idx % topic.facts.length];
  const ex   = topic.examples[idx % topic.examples.length];

  const bubble = addMessage(
    `<strong>${topic.title}</strong><br>${topic.intro}<br><br>${fact}`
  );
  addExample(`📖 Example: ${ex}`, bubble);

  factIndex[key]++;

  // Offer a follow-up prompt
  setTimeout(() => {
    addMessage(
      `Want to know more about <strong>${topic.title}</strong>? Click the button again for another fact, or try the <strong>🎯 Quiz</strong>!`
    );
  }, 600);
}

// ── Quiz Logic ───────────────────────────────────────────────────────
function startQuiz() {
  quizActive = true;
  quizIndex  = Math.floor(Math.random() * QUIZ_BANK.length);
  showQuestion();
}

function showQuestion() {
  const q = QUIZ_BANK[quizIndex];

  const bubble = addMessage(`<strong>Quiz time! 🎯</strong><br>${q.q}`);
  const body   = bubble.querySelector("div:last-child");

  const optDiv = document.createElement("div");
  optDiv.className = "quiz-options";

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "quiz-option";
    btn.innerHTML = opt;
    btn.addEventListener("click", () => handleAnswer(i, optDiv));
    optDiv.appendChild(btn);
  });

  body.appendChild(optDiv);
  scrollBottom();
}

function handleAnswer(chosen, optDiv) {
  const q       = QUIZ_BANK[quizIndex];
  const buttons = optDiv.querySelectorAll(".quiz-option");

  // Disable all options
  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.answer)  btn.classList.add("correct");
    if (i === chosen && chosen !== q.answer) btn.classList.add("wrong");
  });

  const correct = chosen === q.answer;
  setTimeout(() => {
    addMessage(
      correct
        ? `✅ <strong>Well done!</strong> ${q.explanation}`
        : `❌ Not quite — ${q.explanation}`
    );

    // After short delay, offer another question
    setTimeout(() => {
      addMessage("Would you like another question? Click <strong>🎯 Quiz me!</strong> again, or pick a topic to learn more.");
      quizActive = false;
    }, 800);
  }, 400);
}

// ── Free-text Response ───────────────────────────────────────────────
// ── Keyword map — only broad topic exploration, NOT specific questions ──
// Removed overly-broad words: "tense" (grabbed present/future tense Qs),
// "doing" (grabbed unrelated sentences), "question" (triggered quiz wrongly),
// "action" (too generic).
const KEYWORD_MAP = [
  { words: ["nouns", "proper noun", "common noun", "plural noun"],          topic: "nouns" },
  { words: ["verbs", "verb phrase", "helping verb"],                        topic: "verbs" },
  { words: ["adjective", "adjectives", "describing word"],                  topic: "adjectives" },
  { words: ["punctuation", "apostrophe", "full stop", "question mark",
            "exclamation mark", "speech marks", "inverted commas"],         topic: "punctuation" },
  { words: ["quiz me", "give me a quiz", "test me", "challenge me"],        topic: "quiz" },
];

const GREETINGS = ["hi", "hello", "hey", "hiya", "good morning", "good afternoon"];

/**
 * Last-resort intent detection — only fires when no specific detector matched.
 * Uses tighter keywords so broad words ("tense", "verb", "question") don't
 * hijack specific questions that already have dedicated handlers.
 */
function detectIntent(text) {
  const lower = text.toLowerCase();

  if (GREETINGS.some(g => lower.includes(g))) return "greeting";

  // Multi-word phrases first (more specific)
  for (const entry of KEYWORD_MAP) {
    if (entry.words.some(w => lower.includes(w))) return entry.topic;
  }

  // Single broad topic words — only when the input is very short (1-3 words)
  // This handles "tell me about verbs" / "nouns" typed alone without
  // swallowing longer questions that have a specific answer.
  const wordCount = lower.trim().split(/\s+/).length;
  if (wordCount <= 4) {
    if (/\bverb\b/.test(lower))        return "verbs";
    if (/\bnoun\b/.test(lower))        return "nouns";
    if (/\badjective\b/.test(lower))   return "adjectives";
    if (/\bpunctuation\b/.test(lower)) return "punctuation";
  }

  return "unknown";
}

function handleUserInput(text) {
  if (!text.trim()) return;

  addMessage(text, "user");
  userInput.value = "";

  // Priority order — most specific first, broad fallback last.
  // Each handler returns null if the input is not its concern.

  // ── 1. Past-tense lookup (e.g. "what is the past tense of go?") ──
  const pastTenseReply = detectPastTenseQuestion(text);
  if (pastTenseReply) { addMessage(pastTenseReply); return; }

  // ── 2. Present-tense explanation (e.g. "how many present tenses?") ──
  const presentTenseReply = detectPresentTenseQuestion(text);
  if (presentTenseReply) { addMessage(presentTenseReply); return; }

  // ── 3. Grammar definition Q&A (e.g. "what is an irregular verb?") ──
  const grammarReply = detectGrammarQuestion(text);
  if (grammarReply) { addMessage(grammarReply); return; }

  // ── 4. Broad topic / quiz routing ─────────────────────────────────
  const intent = detectIntent(text);

  if (intent === "greeting") {
    addMessage("Hello there! 👋 I'm <strong>English Buddy</strong>! Pick a grammar topic above or just ask me anything about English! 😊");
  } else if (intent === "quiz") {
    startQuiz();
  } else if (TOPICS[intent]) {
    showTopic(intent);
  } else {
    // ── 5. Helpful fallback — no unrelated facts ───────────────────
    addMessage(
      "I'm not sure about that one yet! 🤔<br><br>" +
      "Here are some things you can ask me:<br>" +
      "• <em>\"What is the past tense of go?\"</em><br>" +
      "• <em>\"How many present tenses are there?\"</em><br>" +
      "• <em>\"What is an irregular verb?\"</em><br>" +
      "• <em>\"What is a noun?\"</em><br><br>" +
      "Or click a topic button above to explore! 😊"
    );
  }
}

// ── Event Listeners ──────────────────────────────────────────────────
sendBtn.addEventListener("click", () => handleUserInput(userInput.value));

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") handleUserInput(userInput.value);
});

document.querySelectorAll(".topic-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const topic = btn.dataset.topic;
    const label = btn.textContent;
    addMessage(label, "user");          // show user "clicked" the topic
    if (topic === "quiz") {
      startQuiz();
    } else {
      showTopic(topic);
    }
  });
});

// ── Welcome Message ──────────────────────────────────────────────────
window.addEventListener("DOMContentLoaded", () => {
  addMessage(
    "Hi there! 👋 I'm <strong>English Buddy</strong>, your grammar helper! 🦉<br><br>" +
    "I can teach you about <strong>nouns</strong>, <strong>verbs</strong>, <strong>adjectives</strong>, and <strong>punctuation</strong>.<br><br>" +
    "Click a topic button above, or just type a question to get started!"
  );
});
