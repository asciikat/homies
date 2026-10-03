# Homies

**Keep your crew close.** A GTA-style radar of your people, built on the ideas from
Friend Orbit, in the same night-city look as
[Mission Possible](https://github.com/asciikat/Mission-Possible). Later it becomes a
tab in Mission Possible (see [INTEGRATION.md](INTEGRATION.md)).

Single page: `index.html`. No build step and no account needed.

## How it plays

- **Radar.** Everyone you add is a blip on a GTA-style minimap of a little city.
  The closer a blip is to your arrow in the middle, the more in touch you are. The
  rings are zones: **Crew** (tight lately), **The Block** (all good),
  **Across Town** (could use a wave) and **Off the Map** (still on your radar).
  Blips drift outwards over time, depending on how often you want to check in with
  each person. Tap a blip to open their dossier.
- **Contact mission.** One homie a day, picked from the people who've drifted
  furthest. Pick a move (thought of them, meme, text, voice memo, game, call,
  link up IRL, or "they hit me up") and you've passed. **Someone else** rerolls,
  and skipping is always fine.
- **Fuel.** Set your fuel for the day (Fumes, Low, Cruising, Full tank) and the
  mission only offers moves that fit. On Fumes, just thinking of someone counts.
- **Respect.** Every move earns respect, and you rank up from *Lone Wolf* to
  *Godfather of the Group Chat*. Big moves (calls, games, link-ups) and rank-ups
  get a full-screen **Mission passed** stamp. Respect only goes up: deleting
  someone doesn't take it away.
- **Phone.** Your contact list, grouped by zone. The ✦ button logs "thought of
  them" in one tap; **+** opens the other moves. Add one person, or paste a whole
  list.
- **Dossier.** Tap anyone to open their file: pronouns, how you know them,
  **Intel** (things to remember), **Ask about** (what's going on for them),
  birthday, check-in rhythm, crew, how they like to keep in touch, blip colour and
  their history. **What do I say?** offers ready-made messages to copy.
- **Safehouse.** For hard days. The house button hides everything except the
  people you've marked as safehouse homies, a message that asks for nothing, and
  crisis lines. Opening `…/homies/#safehouse` goes straight there.
- **Laying low.** Take someone off the radar for a while without deleting them.

Keys on desktop: `N` add, `/` search, `Esc` close.

## Bringing your Friend Orbit people over

In Friend Orbit tap **Back up**, then in Homies tap **Restore** on the phone and
pick that file. Homies uses the same people format, so everyone comes across
with their notes, birthdays and history.

## Where your data lives

Your homies are saved in this browser (`localStorage`, key `homies.v1`). Use
**Back up** now and then; **Restore** merges a backup back in (newest edit wins).
Sound and fuel are kept per device.

Homies and Mission Possible both live on `asciikat.github.io`, so they share the
same browser storage. Homies only uses keys that start with `homies.`, so the two
never touch each other's data.

## Host free on GitHub Pages
1. Repo **Settings → Pages → Deploy from a branch → `main` / root → Save**.
2. Open `https://asciikat.github.io/homies/`.

## Install as an app
Open the site in Chrome or Edge and use **Install** from the address bar or menu;
on iPhone use Safari **Share → Add to Home Screen**. It opens full-screen with its
own icon and works offline.
