window.WORLD_DATA["languages"].push(
{
    id: "common",
    title: "The Common Language",
    subtitle: "Trade lingua franca",
    summary: "The trade lingua franca of the world. Head-final, heavily suffixing, and case-driven, with no verb agreement. Every relationship in a sentence is carried by case suffixes alone, and every role is disambiguated purely by case.",
    tags: ["lingua franca","trade","SOV","case-driven","no verb agreement","tone"],

    sections: [
      {
        heading: "Overview",
        markdown: `
This is the trade lingua franca referenced in the [Vosarin](entry.html?c=languages&id=vosarin) documentation as the source of the [Vosarai](entry.html?c=peoples&id=vosarai)'s exonym: **miæɲa ɛlʃamŋa**, "The Mouth of Flowers." Unlike Vosarin itself, this language is head-final, heavily suffixing, and case-driven, with no verb agreement. Every relationship in a sentence is carried by case suffixes alone.
        `
      },
      {
        heading: "Typology at a Glance",
        markdown: `
- **Word order:** SOV (subject–object–verb)
- **Head-final:** modifiers, cases, and clauses all trail toward or attach after their heads in a right-branching, suffix-heavy structure
- **Morphology:** agglutinative, with mild fusion between adjacent suffixes
- **Marking:** dependent-marking (relationships are marked on the dependent noun/verb, not the head)
- **Adpositions:** postpositional only — no prepositions
- **Modifier order:** modifiers precede what they modify
        `
      },
      {
        heading: "Phonology",
        markdown: `
### Consonants

| Manner | Sounds | Notes |
|---|---|---|
| Nasal | m, ɱ | Contrastive distribution |
| Nasal | n, ŋ, ɲ | Contrastive distribution |
| Liquid/Glide | l, ɭ, ʎ, j | Contrastive distribution |
| Fricative | f, θ | Contrastive distribution |
| Fricative | h | — |
| Glide | w | — |

### Vowels

A large, fully contrastive vowel inventory:

i, y, ɪ, ʉ, ɯ, u, ʊ, e, ø, ɘ, ɵ, ɤ, o, ə, ɛ, ɜ, ɔ, æ, ɐ, a, ɶ, ɑ, ɒ

Every vowel quality above is phonemically distinct.

### Word Shapes

- **Nouns** are typically CV(C)V, and usually end in a vowel or sonorant.
  - *miæɲa* /miˈæɲa/ — "mouth"
  - *ʃam* /ʃam/ — "flower"
- **Verbs** are usually (C)V(C)V, and usually end in a vowel.
  - *hɘma* — "to speak"
  - *lɯθa* — "to open"
  - *hoɭa* — "to bloom"
        `
      },
      {
        heading: "Nominal Morphology",
        markdown: `
### Case Suffixes

Case is marked by suffixes, primarily vowel-based (the genitive is the one exception, marked by a prefix).

| Case | Function | Suffix | Example |
|---|---|---|---|
| Absolutive | Intransitive subject | -ø (unmarked) | miæɲa |
| Ergative | Transitive subject | -ɐ | miæɲaɐ |
| Genitive | Possession | ɛl- (prefix) | ɛlʃam |
| Dative | Recipient | -ɵ | ʃamɵ |
| Locative | Location | -ɤ | miæɲaɤ |
| Ablative | Source ("from") | -ʊ | miæɲaʊ |

### Number

Number is layered onto the noun independently of case:

| Number | Meaning | Suffix | Example |
|---|---|---|---|
| Singular | 1 | -æ | miæɲaæ |
| Plural | 2–10 | (unmarked, assumed) | miæɲa |
| Collective | 10+ | -ŋa | miæɲaŋa |

### Personal/Pronominal Forms

Person marking follows the same absolutive/ergative split as nouns:

| Person | Absolutive | Ergative |
|---|---|---|
| 1st plural | -ɲi | -ɲiɐ |
| 2nd plural | -lu | -luɐ |
| 3rd plural | -a | -aɐ |

The singular is derived by adding **-n** to the plural form.
        `
      },
      {
        heading: "Verbal Morphology",
        markdown: `
Verb suffixes attach in a fixed order:

**VERB - ASPECT - TENSE - MOOD**

Critically, **verbs never agree with their arguments.** All grammatical roles are carried entirely by the case suffixes on the nouns, not by anything on the verb.

### Aspect

| Aspect | Suffix |
|---|---|
| Imperfective | -ɘ |
| Perfective | -a |
| Continuous | -ʉ |
| Habitual | -ɵ |

### Tense

| Tense | Suffix |
|---|---|
| Nonpast | (unmarked, assumed) |
| Past | -ɯ |
| Distant past | -ʊ |
| Future | -e |

### Mood

| Mood | Suffix |
|---|---|
| Indicative | (unmarked, assumed) |
| Intentional | -j |
| Evidential (reported) | -h |
| Subjunctive | -l |

### Worked Example

\`\`\`
hɘma-ʉ-ɯ-h
speak-CONT-PAST-REP
"was reportedly speaking"
\`\`\`
        `
      },
      {
        heading: "Syntax",
        markdown: `
### Basic Clause Structure

Since verbs carry no agreement, argument roles are disambiguated purely by case:

\`\`\`
A-ERG   O-ABS   V
miæɲa-ɐ  ʃam    hɘma-ɘ
mouth-ERG flower speak-IPFV
"The mouth speaks the flower."
\`\`\`

*(The poetic ambiguity of "speaking a flower" is intentional in this language — it isn't a translation error.)*

### Modification

Modifiers precede what they modify, including genitive possessors:

\`\`\`
ɛl-ʃam   miæɲa
flower-GEN mouth
"flower's mouth"
\`\`\`

### Adjectives as Stative Verbs

There is no separate adjective class — descriptive concepts are verb-like statives that inflect the same way any other verb does.

- *ɭɘθa*: "to be open"
- *jɔma*: "to be bright"

**Attributive use** (modifying a noun, uninflected, placed before it):

\`\`\`
jɔma   miæɲa
bright mouth
"bright mouth"
\`\`\`

**Predicative use** (functioning as the clause's main verb, taking normal verbal inflection):

\`\`\`
miæɲa jɔma-ɘ
mouth bright-IPFV
"The mouth is bright."
\`\`\`

### Postpositions

There are no prepositions, only postpositions, which follow their noun phrase (and any case marking on it):

| Meaning | Postposition |
|---|---|
| with | ɭu |
| under | hɤ |
| toward | jo |

\`\`\`
miæɲa  ʃam-ɤ    jo     hɘma-ɘ
mouth  flower-LOC toward speak-IPFV
"The mouth speaks toward the flower."
\`\`\`
        `
      },
      {
        heading: "Nominalization",
        markdown: `
Verbs can be turned into nouns with a small, productive set of suffixes:

| Function | Suffix | Meaning shift |
|---|---|---|
| Action noun | -m | the act itself |
| Result | -ɭ | the resulting thing/utterance |
| Instrument | -w | the doer/tool |

- *hɘma-m*: "speech" (the act of speaking)
- *hɘma-ɭ*: "utterance" (the thing produced)
- *hɘma-w*: "one who speaks" (the agent/instrument)

### Full Worked Example

\`\`\`
miæɲa-ɐ    ɛl-ʃam-ŋa      jɔma-ɘ     hɘma-ʉ-ɯ
mouth-ERG  flower-GEN-COL bright-IPFV speak-CONT-PAST
"The Mouth of Flowers was speaking brightly."
\`\`\`

This is the phrase that gives the language — and the Vosarai people, by exonym — its name.
        `
      },
      {
        heading: "Tone",
        markdown: `
Tone is layered on top of the segmental grammar as an independent, semi-optional expressive channel.

### Tone-Bearing Consonants

- **Fully tone-bearing:** m, ɱ, n, ŋ, ɴ, l, ɭ, ʎ, j, w, h
- **Partially tone-bearing:** f, θ, h — realized as a shift in intensity rather than pitch

A tone attaches to the **first tone-bearing consonant** in a word.

### Tone Inventory

| Tone | Symbol | Meaning |
|---|---|---|
| High (acute) | ◌́ | Affectionate / lighthearted |
| Low (grave) | ◌̀ | Alert / excited |
| Rising (circumflex) | ◌̂ | Hopeful / curious / honest |
| Falling (caron) | ◌̌ | Reflective / resigned |

A word can carry up to two tones on its tone-bearing consonant, layering these emotional colorings, where the exact combined meaning is left to the speaker's intent, as long as it's internally logical.
        `
      },
      {
        heading: "Related Notes",
        markdown: `
- [Vosarin](entry.html?c=languages&id=vosarin): The Common Language exonym for the Vosarai, 'Mouth of Flowers', is drawn from Vosarin
- [The Vosarai, Mouth of Flowers](entry.html?c=peoples&id=vosarai): The Vosarai are the people named by this exonym
        `
      },
    ]
  }
);
