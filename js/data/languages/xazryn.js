window.WORLD_DATA.languages.push(
{
    id: "xazryn",
    title: "Xazryn Boaawren",
    subtitle: "Language of the Crown",
    summary: "The Language of the Crown, spoken across the Kingdoms. Root-and-pattern verbal morphology on three-segment VCV roots, a rich locational/directional case system, and no copula: predication of a state or quality needs no linking verb at all.",
    tags: ["Language of the Crown", "root-and-pattern", "templatic", "null subject", "cases", "no copula"],
    // coverImage: "assets/images/xazryn.jpg",

    sections: [
      {
        heading: "Overview & Typology at a Glance",
        markdown: `
**Xazryn Boaawren** is the Language of the Crown, spoken across the Kingdoms. As with many such names, "Language of the Crown" is a gloss rather than a translation; the native name does not literally mean that.

- **Word order:** SVO, though the subject is frequently null. Verbs are fully specified for person on their own, so an overt subject noun is often redundant rather than required.
- **Morphology:** root-and-pattern (templatic), non-concatenative, closer in kind to Semitic ablaut systems than to the suffix-chains of Common or Vosarin.
- **Roots:** verb roots are exactly three segments, canonically VCV (*ara* "write," *oye* "-").
- **Derivation:** nouns are formed transparently from verb roots by prefixing **x-**; most adverbs instead have their own dedicated CVV shape.
- **No copula:** predication of a state or quality needs no linking verb at all.
- **Case:** nouns carry an extensive system of locational, directional, and relational cases, layered onto the same templatic logic as the verb.
        `
      },
      {
        heading: "Word Formation",
        markdown: `
Every verb in Xazryn reduces to a three-segment root of the shape VCV: *ara* "(the idea of) writing," *oye*, and so on. This root is the single unit that every conjugational template below operates on.

Nouns paired to a verb root are formed by simple prefixation of **x-** to that root:

- *ara* "write" → **xara** "writings"

Most adverbs, by contrast, are not derived from verb roots at all; they have their own independent shape, canonically CVV.
        `
      },
      {
        heading: "Verbal Morphology",
        markdown: `
Xazryn verbs are **templatic**: rather than stringing affixes onto either end of the root, a fixed template of consonants and vowels is fitted around the root's own segments, which are inserted in order into the gaps (marked here with underscores). This is the same mechanism across every category below: tense/aspect, non-finite forms, and person are all just different templates applied to the same three-segment root.

For example, the present-tense template \`_s__n\` applied to the root *ara* (a–r–a) inserts the root's three segments into the three gaps, giving:

\`\`\`
_ s _ _ n   +   a-r-a   →   a-s-r-a-n
PRES              write        "I write"
\`\`\`

### Tense / Aspect Templates

Worked from the root **ara** "write":

| Template | Name | Meaning | Result |
|---|---|---|---|
| \`_s__n\` | Present | I write | asran |
| \`er-\` | Preterite | I wrote | erara |
| \`_ba\` | Present Continuous | I am writing | abara |
| \`___mei\` | Present Perfect | I have written | aramei |
| \`_be\` | Future | I will write | abera |
| \`re-\` | Past Continuous | I was writing | reara |
| \`e___r\` | Past Perfect | I had written | earar |
| \`k_o_e\` | Future Continuous | I will be writing | kaorea |
| \`m_e_k_e\` | Present Perfect Continuous | I have been writing | maerkae |
| \`shi-\` | Past Perfect Continuous | I had been writing | shiara |
| \`s_k_y_r\` | Future Perfect Continuous | I will have been writing | sakryar |

Note that all of these surface as first-person-singular forms by default; other persons are layered on afterward (see below).

### Non-Finite Forms

| Template | Name | Meaning | Result |
|---|---|---|---|
| \`e-\` | Imperative | Write! | eara |
| \`_a_m_e\` | Infinitive | to write | aaramae |
| \`x-\` | Nominalization | writings (the noun) | xara |

### Applicative Person-Prefixes

A distinct set of prefixes marks the *recipient* of the action directly on the verb, distinct from the case system used on ordinary nouns:

| Prefix | Meaning | Example | Gloss |
|---|---|---|---|
| m- | to me | masran | "I write to me" |
| mos- | to you | mosasran | "I write to you" |
| mot- | to him/her | motasran | "I write to him/her" |
| miysh- | to it | miyshasran | "I write to it" |
| my- | to us | myasran | "I write to us" |
| mys- | to you all | mysasran | "I write to y'all" |
| myt- | to them | mytasran | "I write to them" |

### Person / Number Suffixes

The bare present template (*asran*) is itself the first-person-singular form. Other grammatical persons are built by suffixing onto that base:

| Suffix | Person | Example | Meaning |
|---|---|---|---|
| (none) | 1sg "I" | asran | I write |
| -os | 2sg "you" | asranos | you write |
| -ot | 3sg "he/she" | asranot | he/she writes |
| -iysh | 3sg inanimate "it" | asraniysh | it writes |
| -y | 1pl "we" | asrany | we write |
| -ys | 2pl "you all" | asranys | y'all write |
| -yt | 3pl "they" | asranyt | they write |

Because person is fully specified on the verb this way, an overt subject pronoun is optional.

### Certainty Suffixes

A further, final suffix layer marks the speaker's confidence in the statement, distinct from tense/aspect or person:

| Suffix | Certainty | Example | Meaning |
|---|---|---|---|
| (none) | Certain | asran | I write |
| -iri | Probable | asraniri | I will probably write |
| -oro | Uncertain | asranoro | I might write |
        `
      },
      {
        heading: "Nominal Morphology: Case",
        markdown: `
The case system is worked below from the noun **xara** "writings" (itself the nominalized form of *ara* "write"). Like the verb, cases are built by templates, though many cases here are simple prefixes or suffixes rather than discontinuous templates.

### Location

| Case | Template | Function | Result |
|---|---|---|---|
| Adessive | j- | near/at/by the writings | jxara |
| Antessive | \`_y\` | before the writings | xyara |
| Apudessive | \`____e\` | next to the writings | xarae |
| Inessive | \`_s__e\` | inside the writings | xsara |
| Intrative | \`____x\` | between the writings | xarax |
| Pertingent | y- | touching the writings | yxara |
| Potessive | \`____y\` | after the writings | xaray |
| Subressive | -us | under the writings | xaraus |
| Superessive | us- | on top of the writings | usxara |

### Motion From

| Case | Template | Function | Result |
|---|---|---|---|
| Initiative | \`a__b_e\` | beginning from the writings | axabrae |

### Motion To

| Case | Template | Function | Result |
|---|---|---|---|
| Lative | \`ae_bi__ne\` | to the writings | aexbiarnea |
| Terminative | \`ae_ky\` | as far as the writings | aexkyara |

### Motion Via

| Case | Template | Function | Result |
|---|---|---|---|
| Perlative | pyr- | along/through the writings | pyrxara |
| Prolative | \`y_p_y_r\` | by using the writings | yxpayrra |

### Morphosyntactic Alignment

| Case | Template | Function | Result |
|---|---|---|---|
| Accusative | -m | object | xaram |
| Nominative | (unmarked) | subject | xara |

### Relation

| Case | Template | Function | Result |
|---|---|---|---|
| Ablative | \`m___ae\` | concerning the writings | mxaraea |
| Aversive | \`o_r_e\` | avoiding the writings | oxraera |
| Causal | nyair- | because of the writings | nyairxara |
| Comitative | ava- | with the writings | avaxara |
| Dative | ae- | to/for the writings | aexara |
| Distributative | \`u__r_e\` | per each of the writings | uxarrea |
| Genitive | -d | of the writings, the writings' | xarad |
| Privative | dse- | without the writings | dsexara |
| Substitutive | \`i_o___re\` | instead of the writings | ixoarare |

### Number

| Category | Template | Meaning | Result |
|---|---|---|---|
| Plural | -y | multiple writings | xaray |
| Diminutive | \`___a_ra\` | little writings | xaraara |
        `
      },
      {
        heading: "Syntax",
        markdown: `
### No Copula

Xazryn has no verb "to be" for simple predication. A subject and a stative predicate simply stand side by side:

\`\`\`
annesey  esbeniysh
sun      hot
"The sun is hot."
\`\`\`

\`\`\`
yxjy    asjan
dress   spin
"The dress is spinning."
\`\`\`

### Negation

The particle **n** negates the word immediately following it, most often a verb:

\`\`\`
n     aszin    avvy   nouin
NEG   I-sleep  this   night
"I didn't sleep tonight."
\`\`\`

\`\`\`
tureiy   n     dae
tree     NEG   big
"The tree isn't big."
\`\`\`

### Relative Clauses

Xazryn has no participles; where English would use one, Xazryn uses a simple relative clause introduced by **naviy** "that":

\`\`\`
esbinot   usiiny   naviy   boreaus
he-sees   spider   that    under-the-bed
"He sees the spider that is under the bed."
\`\`\`

\`\`\`
esbon      nnekoyn  naviy   asninot
I-have     dog      that    he-talks
"I have a talking dog."
\`\`\`

### Questions

The particle **uy** marks a clause or word as interrogative; it may appear clause-initially or immediately before the word it questions:

\`\`\`
uy    sntine   asronos    avvy
INT   time     you-go     here
"When will you come?"
\`\`\`

\`\`\`
uy    esbanos     astinos   yy
INT   you-want    to-kiss   me
"Do you want to kiss me?"
\`\`\`

\`\`\`
esbanos     astinos   uy    yy
you-want    to-kiss   INT   me
"Do you want to kiss me?"
\`\`\`

### Comparison

The particle **a** covers both "as" and "than":

\`\`\`
susue   dae   a    nnekoyn
bug     big   as   dog
"The bug is as big as a dog."
\`\`\`

\`\`\`
hkosta   dae   y      a      nnekoyn
horse    big   much   than   dog
"Horses are bigger than dogs."
\`\`\`

Adjectives and adverbs reduplicate to form superlatives:

\`\`\`
nnekoyny   rey     dai   dai
dogs       things  good  good
"Dogs are the best things."
\`\`\`

### Imperative

The **e-** template (seen already under Verbal Morphology) marks determination generally, and specifically an imperative in the second person:

\`\`\`
n     eesbunos
NEG   IMP-you-lie
"Do not lie!"
\`\`\`

\`\`\`
eesbyny
IMP-we-begin
"We shall begin!" / "Let us begin!"
\`\`\`

### Politeness

The particle **nyaa** softens a clause, usually lowering the intensity of the verb it attaches to. Unlike most particles, **nyaa** is placed at the *end* of the clause it modifies, and often, though not always, corresponds to English "please":

\`\`\`
eesdan    xede    aeyy      nyaa
you-IMP-give   drink   DAT-me   please
"Please give me a drink."
\`\`\`

\`\`\`
n     eesdinos       nyaa
NEG   you-must-leave  please
"You shouldn't leave."
\`\`\`

\`\`\`
esban       asnin    nse     osd        nya
I-want   to-speak  child   your-GEN   please
"I would like to talk to your child."
\`\`\`

\`\`\`
aszinos      dai    nyaa
you-sleep    good   please
"May you sleep well."
\`\`\`

### Conditional Sentences

The verbal particle **nya** marks a clause as the protasis ("if..."); any verb in the sentence lacking it belongs to the apodosis ("then..."):

\`\`\`
nya    asronos   arobe       avaos
COND   you-go    I-will-go   with-you
"If you go, I will come with you."
\`\`\`

\`\`\`
nya    neeburos       y      nya    nesdun         os
COND   NEG-you-lied   much   COND   NEG-I-dislike  you
"If you hadn't lied so much, I wouldn't dislike you."
\`\`\`

\`\`\`
nya    avube      ot    nya    esdon      ot
COND   I-had-seen her   COND   I-thank    her
"If I had seen her, I would have thanked her."
\`\`\`

### A Note on Perception: *ebi*

The root **ebi** covers perception through any sense; the sense involved can optionally be specified with a comitative phrase:

\`\`\`
nekoyn   esbiniysh   momene
cat      perceives   music
"The cat listens to music."
\`\`\`

\`\`\`
esbin       nekoyn   avaear      xha   navaeye
I-perceive  cat      with-ear    but   NEG-with-eye
"I hear the cat but cannot see it."
\`\`\`
        `
      },
      {
        heading: "Worked Example",
        markdown: `
The following short passage shows the templatic verb system, the case system, and null-subject syntax working together at full scale:

\`\`\`
annesey reefaiysh usmony, abadaiysh xefem amarmd ubarielara. xey
reafeiyshy xafem vesmd, vxetar blandd erabuiysh erabyiysh tureyim
turaerayimdy. sntairane blandd, xefi byy es naviy ana esdaniysh.
\`\`\`

*"The sun was setting over the mountains, casting a golden light across the valley. Birds were singing their evening songs, and a gentle breeze rustled the leaves of the trees. It was a peaceful moment, a reminder of the beauty that nature offers."*

Every content word here traces back to a three-segment root run through one of the templates above (*efa* "setting" → *reefaiysh*; *ada* "burning" → *abadaiysh*; *afe* "singing" → *reafeiyshy*; *abu*/*aby* "movement/flowing" → *erabuiysh erabyiysh*), with case suffixes (*-mony* superessive-plural on "mountains," *-md* dative on "light," "songs," and case-stacked genitives like *-imdy* on "leaves of the trees") layered on top.
        `
      }
    ]
  }
);