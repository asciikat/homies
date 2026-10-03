# Homies

**Hit up your people, stack cash, protect your battery.** A phone-first game for
keeping in touch, in the same GTA night-city style as
[Mission Possible](https://github.com/asciikat/Mission-Possible).

Single page: `index.html`. No build step, no account.

## How it plays

**Every homie rolls with a crew.** You start with 🫂 Day Ones, 🏠 Family,
💼 Work and 🎮 Gaming, and you can start your own (name, emblem, colours).
Pick a crew, type names (commas for a few at once), done.

**Hit someone up, get paid.** Tap 💸 *I hit someone up* (or anyone on the Crews
screen), pick how, and collect:

| Move | Payout |
|---|---|
| 💬 Social / DM | $10 Bronze |
| 📱 Text | $25 Silver |
| 📞 Phone call | $75 Gold |
| 🤝 In person | $250 **EPIC** |

Every contact ends in a full-screen **Mission Passed**. In person gets the
works: rainbow stamp, cash rain, crowd noise and a screen shake.

**Lucky Wheel.** One spin a day picks today's ×2: every payout with them is
doubled. There's one re-spin if it lands on someone you can't reach today.
People you haven't reached lately come up more often.

**Vibes.** Open anyone's ⋯ and set their vibe:
- 💚 **Nurturing**: pays ×1.5, *recharges* your battery and clears radiation. Rad vibes.
- 😐 **Neutral**: normal payout, uses a bit of battery.
- ☢️ **Toxic**: pays nothing, drains your battery double and gives off
  **radiation**. Each contact with them gets an exposure warning, with
  boundary lines you can copy. Toxic homies never go on the wheel.

**Social battery.** Check in each day (Empty, Low, Okay, Full). Contacts use
battery, nurturing homies give it back, and 🛌 a breather adds 15% (once an hour).
When it's low, only nurturing homies go on the wheel.

**Radiation.** Builds up with toxic contact (8 to 50 rads per contact) and halves
every 2 days. Elevated at 20, high at 50 and critical at 90, when the app
suggests the safehouse. Nurturing contacts clear it faster.

**🏠 Safehouse.** The house button (or `…/homies/#safehouse`) hides the game.
What's left: your battery, a breather button, your nurturing people with a
no-pressure text to copy, and crisis lines (Lifeline 13 11 14, Beyond Blue,
988, Samaritans).

**Weekly heist.** Reach 3 different homies in a week for the $100 crew job, or 6
for the $250 big heist. Toxic contacts don't count.

**Rep.** Total cash and rank (Lone Wolf up to Godfather of the Group Chat),
crew standings for the week, a vibe report with your toxic exposure over the
last 30 days, 12 trophies, recent moves, sound, and backup/restore.

## Where your data lives

Everything is saved in this browser (`localStorage`, key `homies.v3`). Use
**Back up** on the Rep screen now and then. **Restore** merges a backup back in,
and also takes Friend Orbit backups: circles become crews, and safe people
become nurturing. Earlier versions of Homies move across by themselves.

Homies and Mission Possible both live on `asciikat.github.io` and share browser
storage. Homies only uses keys starting with `homies.`.

## Host free on GitHub Pages
Repo **Settings → Pages → Deploy from a branch → `main` / root**, then open
`https://asciikat.github.io/homies/`.

## Install as an app
Chrome/Edge: **Install** from the address bar or menu. iPhone: Safari
**Share → Add to Home Screen**. Opens full-screen and works offline.
