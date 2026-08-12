window.WORLD_DATA.languages.push(
{
    id: "vosarin",
    title: "Vosarin",
    subtitle: "Language of the Vosarai",
    summary: "An ergative language of a sheltered coastal people, where grammatical case shifts depending on how certain the speaker is, and verbs are conjugated for the life-cycle of a bloom instead of tense.",
    tags: ["meadow-harbor contact", "ergative", "evidentiality", "noun classes", "pitch-accent"],
    // coverImage: "assets/images/vosarin.jpg",

    sections: [
      {
        heading: "Overview & Geological Background",
        markdown: `
**Vosarai** (the people), **Vosarin** (the language). From *vos-* "shelter, lee" + *-arai* "collective".

The Vosarai live within the confines of the Northern Wastes, a large and expansive arctic wasteland where nothing grows, and only a few splinter tribes of people live. However, the Vosarai live within a crescent-shaped sheltered area surrounded by vast mountains, blocking out the cold.

These mountains leave the Vosarai region temperate and humid, the perfect environment for their rolling plains and wildflowers.

They also live on a large bay that connects with the major ocean systems of the world, and as such are exposed to nautical trade. Their major exports are dyes and flowers.

The people are usually referred to by their Common Language exonym **miæɲa ɛlʃamŋa**, meaning "**The Mouth of Flowers**".
        `
      },
      {
        heading: "Phonology",
        markdown: `
### Consonants

| | Labial | Alveolar | Palatal | Velar | Glottal |
|---|---|---|---|---|---|
| Stop | p b | t d | | k g | |
| Nasal | m | n | | ŋ | |
| Fricative | | s | ʃ* | h | |
| Liquid | | l r | | | |
| Glide | w | | j | | |

\\* /ʃ/ occurs only in loanwords from harbor contact.

### Vowels

| | Front | Central | Back |
|---|---|---|---|
| High | i | ə* | u |
| Mid | e | | o |
| Low | | a | |

\\* /ə/ is written as ë in the orthography.

All vowels have lengthened counterparts, written as doubled: *ii ee ëë aa oo uu*. Length is contrastive and carries grammatical weight.

**Vowel harmony:** Vowels split into a *front set* (i, e) and a *back set* (u, o) with *a* and *ë* acting as neutral vowels that don't trigger harmony. Suffixes generally have front and back allomorphs.

### Phonotactics

Syllables are (C)(w/j)V(C). Codas restricted to nasals, /s/, /l/ and /r/.

### Prosody

Pitch-accent prosody rather than stress-accent or tone, realized (often) as a rise on the penultimate mora. Certain grammatical categories are signaled partly by a falling contour rather than a segmental suffix.
        `
      },
      {
        heading: "Noun Classes",
        markdown: `
Vosarin sorts every noun into one of eight classes, marked by a prefix that also carries count. The classes aren't organized by shape or animacy like Bantu languages or by sex like Indo-European languages. They're primarily organized by the noun's role in the economy and landscape that defines Vosarai life.

| Class | Sg. prefix | Pl. prefix | Core members | Extended/metaphorical members |
|---|---|---|---|---|
| Blossom | le- | la- | flowers, blooms | beauty, honor, love, anything prized |
| Root | ke- | ka- | roots, bulbs | law, lineage, memory, foundation |
| Vine | ve- | va- | vines, creepers | roads, rivers, sentences, contracts, kinship ties |
| Grain | se- | sa- | seeds, grain | money, crowds, insects, anything numerous |
| Weave | to- | ta- | cloth, dye | tools, books, boats, crafted/processed goods |
| Beast | mi- | ma- | animals | storms and winds (personified in folklore) |
| Soul | no- | na- | people, spirits | ancestors, named individuals |
| Stone | ho- | ha- | rock, cliff, bay-water | shelter, sky, weather-as-force |

The **Stone** class merges both rock and water, which usually would be unrelated substances, but to the Vosarai, the cliffs that block the arctic cold and the bay that lets traders and ships in are conceptually the same thing: great fixed features that enclose the land.

Class prefixes also do some derivational work. The root *-teka-* "weave" produces both **no-teka** "weaver" (Soul class) and **to-teka** "cloth" (Weave class). This is productive. Reclassifying a root by swapping its prefix is one of the main ways Vosarin creates new words without borrowing.

Borrowed nouns get slotted in by metaphor. A foreign concept like "treaty" would be **Root** class, as it's similar to a root in the sense that it "grows underground" and "holds things together".
        `
      },
      {
        heading: "Case and Evidential Split",
        markdown: `
Vosarin's unusual feature: grammatical alignment changes depending on certainty.

### Core cases

| Case | Suffix | Function |
|---|---|---|
| Absolutive | (unmarked) | subject of intransitive, base citation form |
| Ergative | -ir | subject of transitive verb |
| Object | -m | object of transitive verb (only in witnessed mood, see below) |
| Dative/Allative | -en/-on | recipient, goal, direction |
| Genitive | -so | possession |
| Instrumental/Comitative | -we | tool, accompaniment |
| Ablative | -ta | source, origin |
| Locative | -ni | general "at, in" |
| **Lee-case** | -kol | "in the shelter of" |

### The Lee-case

This is a locative case that exists for one reason: the entire region is definable by what's sheltered from what. **-kol** marks "in the shelter/lee of," distinct from ordinary locative -ni. *Ho-kel-kol* "in the shelter of the stone" is the most basic possible sentence fragment in this language, and it's used constantly in extended, metaphorical senses too: *no-dun-so honor-kol*, roughly "in the shelter of the trader's honor," meaning under his protection or good name.

### Evidentiality

Every finite verb carries one of three evidential suffixes:

| Evidential | Suffix | Meaning |
|---|---|---|
| Witnessed | -ko | speaker saw it happen |
| Reported | -san | speaker heard it from someone else |
| Inferred (sensory) | -dai | speaker infers from scent, color, or residue |

The case marking on the object depends on which evidential is used.

- In the **witnessed** mood, Vosarin is *tripartite*: subject, object, and intransitive-subject are all marked differently (S ≠ A ≠ O). The object takes -m, distinct from the zero-marked absolutive of an intransitive subject.
- In the **reported** and **inferred** moods, the object marker -m disappears and the language collapses to ordinary *ergative-absolutive* alignment (S = O, both unmarked; A = -ir).

If you saw something happen with your own eyes, the grammar lets you resolve exactly who did what to whom. If you're passing on hearsay or inferring from a lingering smell of dye, the grammar itself gets vaguer about the object because you're less sure the description is precise. Certainty and syntax are the same system.
        `
      },
      {
        heading: "Numeral Classifiers",
        markdown: `
Counting requires a classifier that agrees with the noun's class.

- *sora nol-le*: "one [Blossom-counter] flower"
- *osi nol-no*: "one [Soul-counter] person"
- *kel nol-ho*: "one [Stone-counter] rock"
        `
      },
      {
        heading: "Verb Morphology: Aspect Over Tense",
        markdown: `
Vosarin has essentially no grammaticalized tense. The primary verbal category is **aspect**, modeled on the life cycle of a bloom and applied to *every* verb, not just growth-related ones. Tense, when it matters, is handled periphrastically with adverbs ("yesterday," "later") rather than inflection.

| Aspect | Suffix | Meaning |
|---|---|---|
| Budding (inceptive) | -et | just beginning |
| Blooming (progressive/culminative) | -ora | ongoing, at its peak |
| Wilting (completive-with-decline) | -us | completed, *and* fading/over |
| Dormant (habitual/stative) | -ilo | background, ongoing truth, seasonal habit |

So "the treaty has ended" takes the **Wilting** suffix, grammatically inseparable from a connotation of decline, as opposed to a neutral "it is finished." "She is learning the trade" takes **Budding**. This means Vosarin speakers can't state that something is merely *complete* without also committing, grammatically, to whether that completion feels like flourishing or fading, and there's no neutral perfective at all.

### Reduplication for distribution

Full reduplication of the aspect suffix indicates the action happening *everywhere at once*, distributed across a field, a crowd, or a season:

- *sora-ora*: "blooming" (one flower, one event)
- *sora-ora-ora*: "blooming and blooming" (the whole field is in bloom simultaneously)

This is used for both literal fields of flowers and metaphorical extensions. A rumor "blooming-blooming" through a market means it's spreading everywhere at once.

### Person marking

Verb agreement tracks the **absolutive** argument (typical of ergative languages), via proclitics:

| | Singular | Plural |
|---|---|---|
| 1st | n= | nal= |
| 2nd | t= | tal= |
| 3rd | (class prefix echoed) | (class prefix echoed, plural) |
        `
      },
      {
        heading: "Syntax",
        markdown: `
**Basic word order: OVS.** The justification ties back to the trade economy: because case marking already disambiguates who did what to whom regardless of position, word order is free to be organized by *discourse prominence* instead of grammatical role, and in a culture built on displaying and praising goods, the object (the flowers, the dye, the cloth) is what gets fronted. The most valued thing in the sentence leads.

Subjects are frequently dropped once established in a witnessed context (since S/A marking makes them recoverable from the verb's agreement), which means casual Vosarin often *surfaces* as simple VO, and the full OVS pattern shows up most clearly in formal, ceremonial, or written registers.

Possessors precede possessed nouns; modifiers follow the noun they modify.
        `
      },
      {
        heading: "Contact and Register",
        markdown: `
Vosarin has two visible layers:

- **Meadow vocabulary**: inherited, phonologically "pure", covering flowers, kinship, land, weather.
- **Harbor vocabulary**: borrowed from trade partners, phonologically messy by native standards. Covers ships, foreign goods, money, distant places.

There's also a simplified trade pidgin used at the docks that never gets used inside the community itself.

### Lexical elaboration: color and scent

Given the dye economy, Vosarin has an unusually large, non-hierarchical vocabulary for **color-as-derived-from-flower** and **scent-as-diagnostic**. Dye-buyers need to specify shade and scent precisely enough to verify a batch's origin and freshness. This vocabulary is exactly where the **inferred evidential** (-dai) gets its heaviest use: "the cloth was dyed with *le-sora-so kera* [flower's name], -dai" "I infer this from its scent", a completely ordinary, unremarkable thing to say when authenticating goods.
        `
      },
      {
        heading: "Worked Example",
        markdown: `
**"The weaver gave the cloth to the trader." (witnessed, completed-with-finality)**

    To-teka-m       naru-us-ko          no-teka-ir        no-dun-en
    WEAVE-cloth-OBJ  give-WILT-WITN     HUMAN-weaver-ERG  HUMAN-trader-DAT

*Literal sense:* "The cloth-was-given (I saw it, and it's over now) by the weaver, to the trader."

Note what the grammar commits the speaker to that English doesn't force:

- **-m** on the object: because this is witnessed, the language resolves exactly who received the action, distinct from a bare absolutive.
- **-us** (Wilting) rather than a neutral perfective: the exchange is grammatically marked as *concluded and closed*.
- **-ko**: the speaker is asserting this as something they personally saw, not something reported to them, which matters in a trade economy where provenance and trust are everything.

If the speaker had only *heard* about the exchange:

    To-teka        naru-us-san         no-teka-ir        no-dun-en
    WEAVE-cloth     give-WILT-REP       HUMAN-weaver-ERG  HUMAN-trader-DAT

The object drops its -m marker entirely.
        `
      }
    ]
  }
);
