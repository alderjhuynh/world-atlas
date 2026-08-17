window.WORLD_DATA["kingdoms"].push(
{
    id: "the-crown",
    title: "The Crown",
    subtitle: "Kingdom of Kingdoms",
    summary: "The Crown names two things at once: a single kingdom ruled directly by the Sovereign, and the coalition of six kingdoms, the Crown proper, Harvest, Ocean, Stone, Magic, and Silt, bound together into a single working whole by treaty, tribute, and roughly three centuries of habit.",
    tags: ["six kingdoms", "accord of six", "crownhold", "the mint", "the common reserve", "wardens"],
    // coverImage: "assets/images/the-crown.jpg",

    sections: [
      {
        heading: "Overview",
        markdown: `
**The Crown** names two things at once, and outsiders take embarrassingly long to sort out which one a given sentence means. In the narrow sense, it is a single kingdom: a throne, a mint, a treasury, and the stretch of settled heartland immediately around them, ruled directly by the Sovereign and answerable to no one. In the broad sense, the one meant by Xazryn Boaawren's own claim to be spoken "across the Kingdoms," it is a coalition of six: the Crown proper, **Harvest**, **Ocean**, **Stone**, **Magic**, and **Silt**, each its own kingdom with its own Warden, its own law, and its own reason for being, bound together into a single working whole by treaty, tribute, and roughly three centuries of habit. A Kharsa toll-clerk, a Vergehold garrison officer, and a Crownhold banker will all tell you, without hesitation, that they serve the Crown. Only the banker means the specific kingdom rather than the whole arrangement, and even he will usually not bother correcting you if you assume otherwise.

### How Six Became One

No single conquest produced the Kingdoms; a slow accumulation of marriages, debts, and shared wars against worse alternatives did. The founding document both sides still cite, when they bother citing anything, is the **Accord of Six**, a treaty old enough that its original language has drifted half a register away from anything spoken today, by which five neighboring rulers agreed to recognize the sixth, the Crown's own sovereign, as first among them in exchange for a single mint, a single defensible currency, and a standing promise that no famine, raid, or bad harvest in any one kingdom would be allowed to become that kingdom's problem alone. It was, by the account of every historian who has looked closely at it, less an act of unification than an act of collective risk management dressed up afterward in the language of destiny, and the Kingdoms have never entirely stopped being both things simultaneously: a genuine political union and a very old, very large insurance arrangement that everyone involved has strong incentives not to test.

What the Accord produced in practice is a structure closer to a wheel than a ladder. Each of the five outer kingdoms governs itself, keeps its own courts, and answers to its own Warden in nearly every matter of daily life; the Crown does not run Harvest's farms, crew Ocean's ships, or teach in Magic's halls, and Wardens who forget the difference between "first among equals" and "in charge" tend to find the other four kingdoms suddenly and pointedly unhelpful. What flows to the hub, and what the hub alone controls, is coin, trade law between the kingdoms, and the final word on anything that would otherwise set two Wardens against each other with soldiers rather than lawyers. It is a narrower authority than the word "kingdom of kingdoms" implies, and a far more durable one for being narrow; three centuries on, the Accord has survived several wars, at least one succession crisis in every outer kingdom, and one very bad century in Kyrite prices, mostly by never once being asked to do more than the five outer Wardens actually needed it to do.
        `
      },
      {
        heading: "The Six, at a Glance",
        markdown: `
| Kingdom | Domain | Seat | Ruled by |
|---|---|---|---|
| **The Crown** | Governance, coinage, central treasury | Crownhold | The Sovereign |
| **Harvest** | Grain, livestock, orchard goods | Amberfield | The Warden of Harvest |
| **Ocean** | Fishing fleets, shipbuilding, the navy | Windward Reach | The Lord Admiral-Warden |
| **Stone** | Quarrying, salt, metal ore | Greyspire | The Warden of Stone |
| **Magic** | The Arcane and Healing Academies | Starhold | The Twin Wardens |
| **Silt** | Glasswork, dye, alchemical goods | Ashreach | The Warden of Silt |

Each Warden holds a lesser coronet, struck and gifted by Crownhold itself at investiture. A Warden's authority is real and, within their own kingdom, close to absolute; the coronet is a standing reminder of where that authority was, formally, conferred from, and every outer kingdom's coinage still bears the Crown's own mint-mark alongside the Warden's.
        `
      },
      {
        heading: "Crownhold and the Mint",
        markdown: `
The Crown kingdom itself produces remarkably little in the way of raw goods, no grain worth exporting, no ore, no fleet, and this is generally understood to be the point rather than an oversight. What Crownhold produces is coin, law, and coordination, and it produces all three from the same walled complex at the city's center: the **Old Mint**, where every coin legal for trade anywhere in the Six Kingdoms is struck, weighed, and stamped, and the adjoining **Treasury**, where the Crown's own tithe income, and a standing reserve drawn from it, is kept against exactly the kind of bad year the Accord was written to cover.

The coin itself, universally called simply **the crown** regardless of denomination, is struck from silver and electrum supplied almost entirely by Stone's own mines. Every coin carries the Sovereign's mint-mark on one face and, on the reverse, a small worked symbol identifying which of the outer kingdoms' ore or bullion went into that particular striking, more a matter of accounting transparency than of local pride, though it has become the latter as well, and it is not unheard of for a Harvest merchant to prefer paying out in coin struck from Stone silver over coin struck from Silt electrum, on no better grounds than superstition about which kingdom's metal "holds value" better. The Mint's monopoly is absolute and jealously guarded; counterfeiting or private striking anywhere in the Six Kingdoms is treated, by every Warden's own law and not merely the Crown's, as one of the very few crimes serious enough that all six kingdoms agree, without negotiation, on how it should be punished.

The Treasury's other function, less visible than the Mint's but arguably more central to why the Accord has lasted this long, is the **Common Reserve**: a standing stockpile of grain-credit, coin, and emergency levy-rights against Ocean's fleets, built up in ordinary years from each kingdom's tithe and drawn down, without argument and without interest, whenever any one kingdom suffers a bad enough harvest, storm season, or mine collapse to need it. It is, functionally, the insurance policy the Accord was written to be, administered by a small standing office of Crown ministers who answer, in theory, to the Sovereign, and in practice to a body of five outer-kingdom auditors, one seated by each Warden, whose entire job is making sure the Reserve is never quietly spent on anything but its stated purpose. It is the single most jealously watched institution in Crownhold, and the one piece of the Crown's own machinery that every outer kingdom, whatever else it resents about the arrangement, has never seriously proposed dismantling.
        `
      },
      {
        heading: "Harvest",
        markdown: `
Harvest is why the other five kingdoms can afford to specialize at all. Its rolling, well-watered heartland grows more grain, fruit, and fodder than its own people could eat in three lifetimes, and the surplus, moved by cart, river-barge, and, along the coast, Ocean's own merchant hulls, feeds Stone's quarry-towns, Silt's dry mining camps, Magic's academies, and no small part of Crownhold besides. A bad season anywhere else in the Six Kingdoms is an inconvenience; a bad season in Harvest is, by long-standing and only half-joking custom, referred to across all six kingdoms simply as **the Lean Year**.

Harvest's own governance reflects the weight of that responsibility: the Warden of Harvest presides over a kingdom organized almost entirely around **the Grain Roll**, a yearly, publicly posted accounting of every district's planted acreage, expected yield, and committed tithe, kept with a bureaucratic thoroughness that would look excessive anywhere else in the Six Kingdoms and is treated, in Harvest, as the bare minimum owed to five other kingdoms who are trusting you not to let them starve. Harvest farmers speak of their own work in terms closer to a Stone quarry-master's than a smallholder's elsewhere in the world, output measured, logged, and answerable, and a district that consistently underdelivers against its own Roll finds itself simply not trusted with next season's seed-grain allotment from the kingdom's central stores, a soft sanction that Harvest's farmers take considerably more seriously than most outsiders would expect.
        `
      },
      {
        heading: "Ocean",
        markdown: `
Ocean holds the entire coastline the other five kingdoms depend on, and does two visibly different jobs with it that its own people rarely bother distinguishing: it feeds the Kingdoms, and it defends them. The same shipwrights who build Amberfield's grain-barges and Silt's glass-freighters build the war-hulls that make up the Crown's only standing navy, crewed, largely, by the same fishing families who work the herring-runs and deep-water grounds in peacetime, called up to the fleet in wartime under a levy system old enough that most Ocean households simply assume, from birth, which of their sons and daughters will spend a season or two under sail before the family boat is theirs to keep.

This dual purpose gives Ocean a leverage none of the other outer kingdoms quite matches: it is the only kingdom whose ordinary economic output and whose military capacity are, functionally, the same fleet wearing two different flags depending on the season, and the **Lord Admiral-Warden**, the only Warden whose title formally yokes a military rank to the office, answers for both in the same breath. It is Ocean's hulls that carried the Crown's own conquerors across open water to Kyre and hold, still, the sea-lanes that make every one of the Kingdoms' overseas holdings reachable at all, a fact Ocean's own captains are not remotely modest about, and Windward Reach's harbor taverns are, by wide agreement, the one place in the Six Kingdoms where a Harvest farmer's boasting about a good year's yield will reliably lose out to a fisherman's about a good year's prize-hulls.
        `
      },
      {
        heading: "Stone",
        markdown: `
Stone is mountain and quarry country, hard, cold in its upper reaches, and, by its own Warden's frequent and only slightly resentful reminder, responsible for nearly everything the other five kingdoms build with. Greyspire's quarries cut the dressed stone that raises Crownhold's own walls and Magic's twin academies alike; Stone's deep mines produce the silver and electrum the Old Mint strikes into coin; and its coastal salt-pans, worked in the kingdom's lower reaches where the mountains finally give way to brine flats, supply the preserved provisions that let Ocean's fleets and Harvest's grain-barges alike stay at sea or on the road for weeks without spoiling.

Stone's own society runs, unsurprisingly, on **the Vein**: a district's standing claim to a particular seam, quarry-face, or salt-pan, recorded, defended, and inherited with a formality that Stone's neighbors sometimes find baffling and Stone's own miners consider only sensible, given that a mismanaged vein does not simply cost one season's yield the way a bad harvest does, but can render an entire working face useless for a generation. **Vein-Masters**, elected within each mining district rather than appointed by the Warden, hold real and rarely-questioned authority over when a vein is worked, rested, or abandoned as exhausted, and a Vein-Master's judgment on a seam's remaining life is treated, in Stone, with something close to the same weight Kharsa gives a Water-Warden's read on a well.
        `
      },
      {
        heading: "Magic",
        markdown: `
Magic is the smallest of the Six Kingdoms by population and, by long-standing agreement among the other five, the most closely watched, less out of distrust than out of the plain, practical recognition that Starhold houses the one resource none of the others can produce, replace, or fully audit for themselves. It is also, alone among the Kingdoms, ruled by two Wardens rather than one, and the reason is structural rather than ceremonial: Starhold is home to **the Arcane Academy** and **the Healing Academy**, two institutions that share a city, a kingdom, and a coronet's worth of political weight, and almost nothing else.

The split is not a matter of specialization within a single tradition; it reflects a hard boundary the Kingdoms' own magical theory has never found a way around. Magic in the Crown's tradition does not heal. Whatever combination of reasons scholars offer, and Starhold's own senior mages offer several, none of them fully satisfying even to each other, a wound closed by a working reopens, a fever suppressed by a casting returns worse, and every recorded attempt to bend the tradition's magic toward the body's own repair has ended in failure serious enough that the Academy stopped sanctioning new attempts generations ago. The Healing Academy exists, in large part, because of that failure: a wholly separate institution of surgeons, physicians, and apothecaries, trained in anatomy, herb-lore, and hard-won mundane technique rather than casting, who would, in most other traditions the world over, simply be the healing wing of the same school the mages trained in. In Starhold, they are not, and the two Academies' faculties maintain a relationship best described as professionally cordial and privately competitive, sharing a city's tithe income and a Warden's coronet between them and remarkably little else.

Starhold's Twin Wardens, one drawn from each Academy's senior ranks and confirmed jointly by both faculties before the Sovereign, split the kingdom's civil governance along roughly the same line as its magic: the Arcane Warden answers, chiefly, for the export and licensing of the kingdom's trained casters, hired out across the Six Kingdoms and occasionally beyond for weather-work, warding, and the kind of large-scale casting no other kingdom can field on its own, while the Healing Warden answers for the kingdom's physicians, sent out on rotation to serve the other five kingdoms' garrison towns, quarry camps, and fishing fleets, and for the Academy's running, permanent argument with every other kingdom's own folk healers about jurisdiction, credentialing, and whose remedy actually gets tried first.
        `
      },
      {
        heading: "Silt",
        markdown: `
Silt sits where the other kingdoms' geography stops making tidy sense: a kingdom split between a broad, ash-blackened river delta fed by the volcanic uplands at its northern edge and a dry, sun-scoured basin stretching south of it, the two halves joined by exactly the substance that gives the kingdom its name. The river that floods Silt's delta each year carries down volcanic ash from the highlands along with the ordinary silt any floodplain would produce, and the result is soil that grows, in narrow, jealously worked strips along the banks, some of the richest specialty crops anywhere in the Six Kingdoms, vine-fruit, dye-flowers, and rare spice-root, in quantities far too small to feed anyone but far too valuable to ignore, a standing and mostly good-natured rivalry with Harvest that both Wardens have learned to describe, in public, as complementary rather than competitive.

Everything else about Silt runs on what its volcanic and desert halves have in common: heat, and a willingness to work with it. Silt's glassworkers draw on the same highland vents that ash the delta to fire kilns hot enough for **emberglass**, a dense, faintly smoke-colored glass prized across the Kingdoms for alchemical vessels that ordinary glass cracks under; its chemists and dye-masters render sulfur, mineral salts, and desert-grown pigment-plants into everything from Ocean's own fire-oil, used to light signal-beacons and, when a war calls for it, an enemy hull, to the fixed dyes that make Silt cloth resist fading longer than anything Harvest's flax-growers can produce; and its southern desert clans, loosely governed compared to the delta's tighter, canal-fed towns, trade in worked leather, salt-glass beads, and a hardy line of pack-animal bred specifically for the basin's furnace-hot days and startlingly cold nights.

The Warden of Silt governs more lightly than any other Warden in the Six Kingdoms, the delta towns keeping close, canal-regulated order among themselves and the desert basin largely left to its own clan law, much as Kharsa's own clans are left to the Crown's more distant holdings further south. It is, by a wide margin, the outer kingdom most tolerant of people the other five would call troublesome, and more than one fortune, and more than one fugitive, has made its way to Ashreach precisely because Silt has never seen much profit in asking too many questions about either.
        `
      },
      {
        heading: "Tithe, Trade, and the Shape of the Whole",
        markdown: `
What holds the Six Kingdoms together, in the end, is less the Accord's original language than the simple fact that none of them can easily do without the others. Harvest cannot mine its own salt or strike its own coin; Ocean cannot feed a fleet without Harvest's grain or arm one without Stone's iron; Stone cannot eat what it quarries; Magic trains no farmers and Silt grows no grain worth exporting in bulk; and the Crown itself produces nothing at all beyond the coin, law, and Common Reserve that make every other kingdom's specialization survivable in a bad year. Each outer kingdom pays its tithe to Crownhold, a fixed share of goods, coin, or, in Magic and Ocean's case, service, reviewed and occasionally renegotiated at a standing council the Sovereign hosts every few years, and each draws, in turn, on the Common Reserve and on the other kingdoms' surplus, moved along roads Stone maintains, rivers Harvest's barges work, and sea-lanes only Ocean can guarantee safe.

It is not, by any of the outer Wardens' own private admission, an arrangement free of resentment, Stone grumbles about how much of its silver leaves as raw ore rather than finished coin, Silt about how rarely Crownhold's law bends to account for how differently the delta and the basin actually live, Magic about being asked to explain, yet again, why its casters can raise a ward against the Blight but not close a wound. But three centuries of shared famines survived, shared wars won, and a single trusted coin spent in every market from Windward Reach to Hallow Haven have made the Six Kingdoms considerably harder to imagine taking apart than they ever were to imagine holding together in the first place, and every Warden currently sitting a coronet, however loudly they complain at council, has so far agreed on exactly that much.
        `
      }
    ]
  }
);