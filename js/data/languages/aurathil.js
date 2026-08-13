window.WORLD_DATA.languages.push(
{
    id: "aurathil",
    title: "Aurathil",
    subtitle: "The Windtongue",
    summary: "The shared ritual and trade language of the Witchlands covens, spoken with wildly varying fluency across nearly every coven. Ergative with five noun classes, a breathy-voiced wind-sensed evidential, and aspect modeled on the behavior of wind instead of tense.",
    tags: ["witchlands", "ergative", "evidentiality", "noun classes", "breathy voice"],
    // coverImage: "assets/images/aurathil.jpg",

    sections: [
      {
        heading: "Overview & Cultural Background",
        markdown: `
**Aurathil**, "the Windtongue" or "the Casting Tongue" in Common Language. Not any single coven's cradle-speech, but the shared ritual and trade language spoken, with wildly varying fluency, by nearly every coven across the Witchlands. From *aura* "wind, spirit" + *-thil* "tongue, speech."

No coven raises its children on Aurathil first. Every coven has its own hearth-dialect, often barely intelligible to the coven three valleys over, and the Witchlands has never had, and by most local accounts never wanted, an institution capable of flattening that variation into a single national language. Aurathil is not that kind of language. It is what grew, over centuries of covens crossing paths on the wind-roads, trading, dueling, marrying, and above all *casting* in each other's presence, out of sheer practical necessity: a spellcaster who mishears a working's key word doesn't just misunderstand a sentence, they can mis-cast it, and a grassland with no formal schools to standardize magical training badly needed *some* shared vocabulary precise enough to cast by. Aurathil is that vocabulary, expanded, over generations of contact, into a full second language that most Witchlanders speak reasonably well and every serious spellcaster speaks fluently, regardless of what they spoke first at their mother's fire.

It has no throne behind it, no scriptorium, no grammarian's academy. It has instead the discipline of the working itself: get the word wrong at a hearthside, and you're merely misunderstood; get it wrong mid-casting, and something in the air changes. That discipline, more than any institution, is what has kept Aurathil unusually stable and mutually intelligible across a continent that agrees on almost nothing else.
        `
      },
      {
        heading: "Phonology",
        markdown: `
### Consonants

| | Labial | Alveolar | Palatal | Velar | Glottal |
|---|---|---|---|---|---|
| Stop | p b | t d | | k g | ʔ |
| Nasal | m | n | | ŋ | |
| Fricative | f | s | | | h |
| Liquid | | l r | | | |
| Glide | w | | j | | |

The glottal stop /ʔ/ is written with an apostrophe and occurs mainly at breath-group boundaries; it's rarely contrastive within a word but marks the edge of a phrase clearly enough that trained ears use it for parsing fast speech.

### Vowels

| | Front | Central | Back |
|---|---|---|---|
| High | i | | u |
| Mid | e | ə | o |
| Low | | a | |

### Voice Quality: Modal vs. Breathy

Every vowel in Aurathil can additionally be pronounced either **modal** or **breathy** (marked in the orthography with a following *h*: *a* vs. *ah*). Breathy voicing is a grammatical device, most importantly the marker of the wind-sensed evidential. A speaker who can't reliably produce or hear the modal/breathy distinction is, in practice, marked as someone without casting training, regardless of how good their vocabulary otherwise is.

### Phonotactics

Syllables are (C)(w/j)V(C). Codas are restricted to nasals, /s/, /l/, /r/, and the glottal stop.

### Prosody: Breath Groups

Aurathil is organized in speech not by sentence but by **breath group**: a run of words spoken on a single controlled exhalation, bounded by an audible /ʔ/ or a pause. Breath groups are a grammatical unit: certain particles attach only at the edge of a breath group, and a caster mid-working is trained to plan their phrasing so that the working's key command word never falls at the group's tail end, where breath (and therefore, by local belief, intent) is weakest.
        `
      },
      {
        heading: "Noun Classes",
        markdown: `
Aurathil sorts nouns into five classes, marked by a prefix.

| Class | Sg. prefix | Pl. prefix | Core members | Extended/metaphorical members |
|---|---|---|---|---|
| **Wind** | au- | aui- | wind, breath, weather, spirits | magic itself, casting, omens, anything invisible-but-real |
| **Grass** | sae- | sai- | grass, plants, soil | land, seasons, territory, the open country itself |
| **Herd** | du- | dua- | livestock, wild game | wealth, migration, a coven's mobile property generally |
| **Blood** | ve- | vei- | kin, coven-members | trust, debt of loyalty, marriage-ties |
| **Word** | ra- | rai- | spoken oaths, names, agreements | reputation, standing, disputes, law itself (such as it is) |

The **Word** class carries unusual social weight for a grammatical category. Because the Witchlands has no written law and no court, an oath, a name, and a person's standing are, practically speaking, the entire legal system, and Aurathil groups them together as one kind of noun. To speak of someone's *ra-* is to speak, at once, of what they've promised, what they're called, and how much either currently counts for.

As in related grassland tongues, class-swapping by prefix substitution is a productive way to coin new words without borrowing. The root *-dun-* "to move as a body, to migrate" gives **du-dun** "a herd" and, with the same root reclassified, **au-dun** "a migration of spirits" or, colloquially, a moving weather-front thought to carry restless ghosts, a common Witchlands belief about certain storms.
        `
      },
      {
        heading: "The Descent Suffixes and the Epithet System",
        markdown: `
### Basic Form

Where noun class is marked by prefix, **descent**, whose child, or metaphorical child, something or someone is, is marked by a suffix set, independent of class:

| Suffix | Marks | Example |
|---|---|---|
| **-ea** | daughter/progeny of (feminine) | *aura* "wind, spirit" + *-ea* → **auraea**, "daughter of the winds" |
| **-eo** | son/progeny of (masculine) | *aura* + *-eo* → **auraeo**, "son of the winds" |
| **-en** | child/progeny of (unspecified or plural) | *aura* + *-en* → **auraen**, "child(ren) of the winds" |

Literally, this suffix set does ordinary kinship work: *velea* "daughter of the coven," *ravean* "son of an oath," and so on, wherever descent or origin needs marking.

### Why It Matters

What makes this suffix set unusually productive in the Witchlands is that it is not restricted to literal parentage. Because standing among spellcasters is earned rather than inherited (no coven issues titles; a caster's authority rises and falls entirely on demonstrated skill and remembered favor), the descent suffixes have become the primary way the language marks a *conferred* magical identity: a working name, granted by a coven or a teacher when a caster's aptitude in some domain becomes undeniable, rather than a birthright carried from the cradle.

**Auraea**, "daughter of the winds," is the paradigm case, and the most prestigious epithet in the entire language: it is given, sparingly and never self-claimed, to a caster whose command of weather- and wind-magic has become so refined that other casters simply start calling her that instead of her hearth-name, and the name follows her from coven to coven for the rest of her life. There is no ceremony that grants it, no council that certifies it; it simply accumulates, one coven's usage at a time, until it's the name everyone uses, including, eventually, her own coven of birth.

Other roots take the same suffixes to form comparable epithets in other domains:

| Root | Meaning | Epithet (fem.) | Sense |
|---|---|---|---|
| *aura-* | wind, spirit | **auraea** | daughter of the winds: weather- and storm-casters |
| *sael-* | grass, growing thing | **saelea** | daughter of the grass: herb- and growth-casters |
| *dunar-* | migration, the herd-road | **dunarea** | daughter of the drove: those who read animal and weather signs for safe travel |
| *sil-* | silence, stillness | **silea** | daughter of the quiet: casters of concealment and stealth-work |

Because the suffix is productive and not a closed list, new epithets are coined constantly, and old ones fall out of use just as fast if the caster who bore them dies without a clear successor known well enough to inherit the *name*, if never the title. A portable, institution-free, reputation-based naming system turns out to travel exactly as well as the roving covens that use it, which is presumably no accident.
        `
      },
      {
        heading: "Case and the Wind-Sensed Evidential",
        markdown: `
### Core Cases

| Case | Suffix | Function |
|---|---|---|
| Absolutive | (unmarked) | subject of intransitive, base citation form |
| Ergative | -ir | subject of transitive verb |
| Object | -m | object of transitive verb |
| Dative/Allative | -en | recipient, goal, direction |
| Genitive | -so | possession |
| Instrumental | -we | tool, means |
| Ablative | -ta | source, origin |
| Locative | -ni | general "at, in" |
| **Windward** | -tai | facing into, or moving against, the current wind |
| **Leeward** | -kai | sheltered from, or moving with, the current wind |

### Windward and Leeward

The open grassland offers almost nothing fixed to navigate by. No mountains, few permanent rivers, a horizon that looks the same in every direction for days at a stretch. What the Witchlands has instead, reliably, is wind, and Aurathil's two directional cases are built on it rather than on compass points or landmarks. **-tai** marks motion or orientation *into* the current wind; **-kai** marks motion or orientation *with it, or sheltered from it*. A coven giving directions to a waystation doesn't say "three days east"; they say something closer to *saeni-tai osad*, "three days windward-of-here," a direction that only makes sense, and only stays accurate, for as long as the wind holds its current heading, which is exactly why Witchlands wayfinding is taught as a living skill rather than a fixed map, and why outsiders relying on foreign-made charts get lost so reliably once they're a day past the Coastal Fringe.

### Evidentiality

Every finite verb takes one of three evidential suffixes, and this is where the modal/breathy voice-quality contrast becomes grammatical:

| Evidential | Suffix | Voice Quality | Meaning |
|---|---|---|---|
| Witnessed | -ko | modal | speaker saw it happen |
| Reported | -san | modal | speaker heard it from someone else |
| **Wind-sensed** | -kho | breathy | speaker perceived it through magical sense, in the residue on the air |

The wind-sensed evidential is not, strictly, restricted to trained spellcasters, anyone can attempt to use it, but producing the breathy voice quality convincingly and consistently is difficult without years of casting practice, and a laity speaker who overuses **-kho** is understood, gently or not so gently, to be claiming a perception they probably don't have. Among casters, by contrast, it's entirely ordinary and unremarkable: *duru-set-kho*, "the storm is rising (I can feel it building on the wind)," is a completely mundane thing to say before anyone else can see a cloud on the horizon, and a caster who consistently senses weather-shifts correctly this way is, over years, exactly the kind of reputation that eventually earns someone the *auraea* epithet in the first place. The grammar and the culture's whole standing-economy point at each other: you don't get called daughter of the winds until your **-kho** has been right often enough that people stopped doubting it.
        `
      },
      {
        heading: "Verb Morphology: Aspect on the Wind's Cycle",
        markdown: `
Like several of its neighbors, Aurathil grammaticalizes aspect over tense; tense, where it needs to be specified at all, is handled with time adverbs. But where a settled, plant-tending people models its verbal aspect on a bloom's life cycle, the Witchlands, unsurprisingly, models its on the behavior of wind.

| Aspect | Suffix | Meaning |
|---|---|---|
| **Rising** (inceptive) | -et | just beginning, building |
| **Gusting** (progressive/peak) | -ash | ongoing, at full intensity |
| **Falling** (completive-with-fading) | -us | completed, and dying down |
| **Still** (habitual/stative) | -ol | background truth, calm, the resting state |

A working "is being cast" takes **Gusting**; a working that "has been cast and finished" takes **Falling**, with the same connotation of decline baked in that Vosarin's Wilting aspect carries for a treaty. Aurathil speakers, like their coastal cousins to the north, have no way to say a thing is simply, neutrally over. It either finished mid-storm and is now dying away, or it never really got going, and the two are not interchangeable.

### Person Marking

Verb agreement tracks the absolutive argument via proclitics:

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
**Basic word order: free, organized by breath-group prominence.** Because case marking already resolves who did what to whom, word order carries discourse weight instead of grammatical weight, and Aurathil speakers routinely front whichever element the breath group is actually *about*. Often, tellingly, the evidential-marked verb itself, since in a culture built on reputation and remembered testimony, *how you know something* is frequently the most important part of the sentence, ahead of even what happened.

Subjects are dropped constantly once established, especially inside a single breath group, which is also the domain within which the wind-sensed evidential's breathy voicing has to be sustained; a long breathy passage is, among casters, a small feat of controlled breath as much as a grammatical choice.

Possessors precede possessed nouns; modifiers follow.
        `
      },
      {
        heading: "Dialects and the Limits of Standard Aurathil",
        markdown: `
There is no such thing as a fully standard Aurathil, and no institution exists, or has ever existed, to make one. What's described above is closer to the *casting register*: the form used at waystations, in inter-coven parley, and in nearly all spellwork, because a mismatched working is a much worse outcome than a mismatched conversation. Hearth-dialects, by contrast, vary enormously, sometimes swapping whole case suffixes, sometimes losing the modal/breathy contrast entirely in covens with little tradition of wind- or weather-casting. A coven's degree of fluency in "proper" casting-register Aurathil is, in fact, one of the few things outsiders and Witchlanders alike use as a rough, unofficial gauge of how seriously that coven takes magic at all, for better or worse.
        `
      },
      {
        heading: "Worked Example",
        markdown: `
**"The daughter of the winds felt the storm rising, off in the distance." (wind-sensed, inceptive)**

    Aura-ea-ir       au-dur-m        et-kho          sae-tai
    WIND-daughter-ERG WIND-storm-OBJ  rise-EVID.WIND  GRASS-windward

*Literal sense:* "Wind's-daughter (subject) storm (object) is-rising-[I-sense-it-on-the-wind], out windward-of-here."

Note what this single breath group commits the speaker to, in a language where the storm itself and the person sensing it are both, grammatically, creatures of the same Wind class:

- **-ir** on *auraea*: she is the transitive subject, acting on the storm by perceiving it, not merely a passerby it happens near.
- **-kho**, in breathy voice: the speaker (whether *auraea* herself or someone reporting on her) is asserting this as a magically sensed fact, not something seen or heard secondhand — the claim a working caster's whole reputation is built on being right about.
- **-tai**: the storm is windward, oriented against the current air, which any Witchlander hearing this sentence will immediately understand as "coming, and coming toward us," without a single word of the sentence needing to say so directly.
        `
      },
      {
        heading: "Pronouns",
        markdown: `
Person is tracked on the verb by proclitics, but Aurathil also has independent pronouns, used for emphasis, for any case other than absolutive, and whenever the subject needs to be stated rather than dropped.

| Person | Absolutive | Ergative | Object | Genitive |
|---|---|---|---|---|
| 1sg | *na* | *nair* | *nam* | *naso* |
| 2sg | *ta* | *tair* | *tam* | *taso* |
| 3sg | *ki* (generic) | *kir* | *kim* | *kiso* |
| 1pl | *nala* | *nalair* | *nalam* | *nalaso* |
| 2pl | *tala* | *talair* | *talam* | *talaso* |
| 3pl | *kila* | *kilair* | *kilam* | *kilaso* |

Third-person pronouns are rarely used on their own; speakers overwhelmingly prefer a class-prefixed noun or the echoed class prefix already built into third-person verb agreement. Using bare *ki-* forms instead of a class-marked noun can sound faintly rude, as though the speaker can't be bothered to specify what kind of thing they're talking about.

There is no distinct polite/familiar pronoun split. Respect is marked instead through the epithet and naming system: using someone's earned epithet rather than their hearth-name *is* the polite register.
        `
      },
      {
        heading: "Numerals",
        markdown: `
Witchlands counting is built on the hand and the herd, not on an abstract base.

| Value | Aurathil | Literal sense |
|---|---|---|
| 1 | *soh* | - |
| 2 | *tuo* | - |
| 3 | *kir* | - |
| 4 | *pan* | - |
| 5 | *lu* | "hand" |
| 6 | *lusoh* | hand-and-one |
| 7 | *lutuo* | hand-and-two |
| 8 | *lukir* | hand-and-three |
| 9 | *lupan* | hand-and-four |
| 10 | *duel* | "two hands," also colloquially "a full count" |
| 20 | *dulu* | "a herd's worth" |
| 100 | *duombo* | "a great herd" |

Above ten, Aurathil counts by adding onto *duel*: *duel-lu-soh* = "ten and one hand and one" = 16. This is exact but cumbersome, and in practice most speakers give large quantities as an approximation (*du-* + adjective) rather than a precise numeral, "many-herd" rather than an exact count, unless the number genuinely matters, as in a bride-price or a truce's terms, where *ra-* (Word class, §2) demands precision.

Numerals precede the noun they count and take no class prefix of their own; they agree with nothing.
        `
      },
      {
        heading: "Negation, Questions, and Commands",
        markdown: `
### Negation

Aurathil negates with the preverbal particle **ne=**, cliticized directly to the verb, ahead of the person proclitic: *ne=n-et-kho*, "I do not sense it rising." Negation and the wind-sensed evidential combine freely and are not considered contradictory; a caster can quite ordinarily assert *ne=kho*, "I've checked the wind for it, and it isn't there," which is treated as a real perceptual claim in its own right, not merely an absence of one.

Nouns are negated with the particle *sa-*, prefixed before the class prefix: *sa-au-*, "no wind at all, dead calm," is a mildly ominous thing to say in a culture that navigates and casts by moving air.

### Yes/No Questions

Questions attach at the **breath-group edge**. The question particle **-a** closes the breath group: *duru-set-kho-a?*, "is the storm rising (do you sense it)?" Because -a occupies the same structural slot as the phrase-final glottal stop, a fast or careless speaker can blur a statement into a question, which is one of the more common mistakes learners make.

### Content Questions

Question words are themselves class-prefixed nouns, matching whatever they're asking about, rather than a single invariant "what/who":

| Aurathil | Class | Asks about |
|---|---|---|
| *au-i* | Wind | what (invisible/abstract thing) |
| *sae-i* | Grass | where, what place |
| *du-i* | Herd | which animal, how much wealth |
| *ve-i* | Blood | who (what person, by kinship) |
| *ra-i* | Word | what was said, what's the agreement |

Asking *ra-i ki-san-us?*, "what did they say (report-evidential)?" is grammatically distinct from *ve-i ki-san-us?*, "who said it?". The first questions the content of speech, the second the speaker.

### Commands

Two imperative suffixes exist, and casters are trained early to keep them straight, since the difference matters mid-working:

| Suffix | Force | Use |
|---|---|---|
| **-ta** | direct command | ordinary instruction: "hold it," "say it now" |
| **-tan** | soft/requested command | courteous asks, and commands issued to a working itself |

Speaking *-ta* to a spell in progress, rather than *-tan*, is considered a rookie's mistake: a working is conventionally addressed with the softer form, on the folk-logic that wind, like a person, resists being ordered around and responds better to a request. Experienced casters will tell you this is superstition. They use *-tan* anyway.
        `
      },
      {
        heading: "Derivation Beyond Class-Swapping and Descent",
        markdown: `
Two further productive affixes round out everyday word-formation, alongside class-swap and the descent/epithet suffixes:

- **-tu**, agentive: root + *-tu* names someone who does a thing as a matter of ordinary trade or habit, with none of the earned, conferred prestige of a descent-epithet. *Dua-set-tu*, roughly "herder," is simply a job; *dunarea*, "daughter of the drove," is a reputation. A coven can have several *dua-set-tu* and, at most, one living *dunarea* at a time.
- **-om** / **-ik**, augmentative and diminutive: *-om* marks something great, mighty, or severe (*au-dur-om*, "a truly great storm"); *-ik* marks something small or dear (*ve-en-ik*, "little one," an affectionate term for a young child, also used between close friends).
        `
      },
      {
        heading: "Greetings and Common Social Formulas",
        markdown: `
Witchlands social speech is short and breath-group-bound, in keeping with the general prosody (§1). A few fixed formulas cover most daily encounters:

| Aurathil | Literal sense | Used for |
|---|---|---|
| *Au sao tan* | "wind favor you" | general greeting, any time of day |
| *Sae kai-ni* | "grass at your lee-side" | greeting someone traveling, wishing them shelter from weather |
| *Ra taso ol* | "your word stands" | acknowledging a promise or deal as settled |
| *Vem naso* | "of my blood" (contracted from *ve-m na-so*) | said to welcome someone formally into a coven, not necessarily kin by birth |
| *Ne au* | "no wind [between us]" | a stock phrase at waystations, roughly "I mean no trouble here" |
| *Kho sao* | "[I] sense you well" | a caster's informal check-in with another caster; asking after someone's magical, not just physical, state |
        `
      },
      {
        heading: "Daily-Use Dictionary",
        markdown: `
Entries are grouped by domain and marked with their noun class prefix (Wind *au-*, Grass *sae-*, Herd *du-*, Blood *ve-*, Word *ra-*) where relevant. Verb roots are given bare, ready to take person, evidential, and aspect marking as in.

### People and Coven Life

| Aurathil | Class | Gloss |
|---|---|---|
| *ve-lo* | Blood | person, one of the coven |
| *ve-tar* | Blood | elder, respected senior member |
| *ve-en* | Blood | child |
| *ve-set* | Blood | stranger, outsider (lit. "unsettled kin") |
| *sil-tu* | - | one skilled at concealment (agentive, not epithet) |
| *aur-tu* | - | an ordinary caster; any practitioner, unranked |
| *sae-kem* | Grass | camp, campsite |
| *sae-ked* | Grass | territory, range held by a coven |

### Weather and Sky

| Aurathil | Class | Gloss |
|---|---|---|
| *au-dur* | Wind | storm |
| *au-set* | Wind | breeze, light wind |
| *au-gash* | Wind | gale, violent wind |
| *au-nel* | Wind | cloud |
| *au-vash* | Wind | rain |
| *au-tho* | Wind | lightning |
| *au-dun* | Wind | a "spirit-migration"; a restless, ghost-bearing storm-front |
| *sae-fol* | Grass | dry season |
| *sae-vel* | Grass | wet season |

### Animals, Trade, and Wealth

| Aurathil | Class | Gloss |
|---|---|---|
| *du-set* | Herd | livestock generally |
| *du-ren* | Herd | horse |
| *du-mel* | Herd | herd-dog |
| *du-kash* | Herd | wild game |
| *du-vo* | Herd | wealth, goods held |
| *du-tra* | Herd | trade-good, item for barter |

### Words, Oaths, and Standing

| Aurathil | Class | Gloss |
|---|---|---|
| *ra-vo* | Word | oath, sworn promise |
| *ra-nem* | Word | name |
| *ra-kel* | Word | dispute, quarrel |
| *ra-sol* | Word | truce |
| *ra-du* | Word | reputation, standing |
| *ra-set* | Word | rumor, unverified report |

### Time

| Aurathil | Gloss |
|---|---|
| *ol-ni* | now |
| *us-ni* | earlier, already past |
| *et-ni* | soon, about to begin |
| *saeni* | "here"; combines with case suffixes for time-distance, as in *saeni-tai osad*, "three days windward" (§4) |
| *duel-ash* | a full day-and-night cycle (lit. "ten [hours]-gusting") |

### Common Verbs

| Root | Gloss |
|---|---|
| *dun-* | to move as a body, migrate (§2) |
| *set-* | to rise, begin, stand |
| *kho-* | to sense (wind-sensed, magically) |
| *sao-* | to favor, to be well-disposed toward |
| *vo-* | to hold, to possess, to owe |
| *kel-* | to dispute, to contest |
| *tra-* | to trade, to exchange |
| *ked-* | to hold territory, to range |
| *nem-* | to name, to call by name |

### Basic Adjectives

Adjectives follow the noun they modify (§6) and are not class-marked themselves.

| Aurathil | Gloss |
|---|---|
| *gash* | strong, violent |
| *set* | new, rising, fresh |
| *us* | old, spent, faded |
| *kai* | sheltered, calm |
| *tai* | exposed, into the weather |
| *om* | great, mighty (see also augmentative, §12) |
| *ik* | small, dear (see also diminutive, §12) |
        `
      },
      {
        heading: "A Second Worked Example",
        markdown: `
**"My word stands; no trouble here."** (a stock waystation phrase)

    Ra-naso-∅        ol-kho        ʔ    ne-au
    WORD-my-ABS       stand-EVID.WIND        NEG-wind

*Literal sense:* "My word (is, as far as I can tell,) standing; there's no wind [of trouble] here."
        `
      }
    ]
  }
);
