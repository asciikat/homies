# The Hood

**Your social life as a living GTA-style map.** Open it and you're standing in
the middle of your Hood. Your Homies are around you. In two seconds you can see
who's close, who's drifting, where the good energy is coming from, and where the
difficult stuff is.

Single page (`index.html`), phone first, no account. Same night-city style as
[Mission Possible](https://github.com/asciikat/Mission-Possible).

## The map

- **You're in the centre.** The closer a Homie is, the more active they are in
  your life right now. The zones are **Inner Circle**, **The Hood**,
  **The Streets** and **Outta Town**.
- **Drifting:** if you're not in touch, people slowly drift outwards. That's not
  bad, they're just less active right now.
- **Crews** each get their own turf on the map (Family, Old Homies, Work Crew,
  Study Crew, Parents, Online Homies, or your own).
- **⭐ Golden aura:** a soft gold glow around nurturing people. It gets stronger
  the more consistent they are.
- **☢️ Radiation:** spreads from repeated bad hits. One bad hit is a tiny warning
  ring. A pattern spreads it wider, and it can reach you. It shrinks again with
  time or better hits.
- **★ Heat:** GTA wanted stars, 1 to 5, showing how much headspace something is
  taking. They blink from 3 stars up. Heat cools off within days.
- **🏠 Safehouse:** your strongest Golden Homies sit next to it. Tap it on a bad
  day.

## How did that hit?

After you're in touch with someone, it's one tap: **⭐ Golden · 🔥 Good ·
😐 Whatever · ⚠️ Off · ☢️ Bad**. You can add an optional receipt ("Cancelled
again", "Had my back"…), or skip the rating.

Status comes from the **pattern**, weighted towards recent hits:
**Golden → Super Dope → Neutral → On Watch → Toxic**, in both directions.

- One bad hit makes someone On Watch. Only a repeated pattern makes them Toxic.
- Things improve and they move back.
- You can give someone a starting vibe, and your hits take over from there.

The app never says "Dave is Toxic". It says "Recent interactions with Dave have
repeatedly left you feeling worse."

## Quick actions (tap any Homie)

- **📲 Hit them up:** call or text. Add their number and it opens your phone.
  Either way, *How did that hit?* is waiting when you're back.
- **🤝 Catch up:** log it in one tap.
- **🌙 Lay low:** fade them out for 24 hours, 3 days, a week, or a custom number
  of days.
- **🔇 Radio silence:** you've decided not to interact for a while. They stay in
  the Hood, greyed out, until you break it.
- **🚨 Bail:** you don't have to deal with it right now. The app reminds you that
  you don't have to reply. From there: breathe for 30 seconds, lay low, or make
  it a mission not to reply tonight.

Each Homie also shows **Heat**, **Respect** (positive history), **last seen**
("Texted 2 days ago", "No contact for 3 months"), their recent hits and their
**receipts**.

## Hood Pulse and missions

**Hood Pulse** at the top: counts of Golden, Super Dope, Drifting, On Watch,
Toxic, Building Heat, Laying Low and Radio Silence, plus one plain sentence. Tap
any count to highlight those Homies on the map.

**Missions** show up each day ("Catch up with Sam", "Call Mum", "Check in with
Noor", "Don't reply to Dave tonight"). You can also add your own, or 🎰 spin the
Lucky Wheel for one. Logging the contact completes the mission automatically:
**MISSION PASSED · Respect +1**.

## Safehouse mode

The 🏠 button hides the map. What's left: your safe people (with one-tap call or
text if you've saved a number), a text that asks for nothing, a 30-second
breathing exercise, and crisis lines (Lifeline 13 11 14, Beyond Blue, 988,
Samaritans).

## Data

Saved in this browser only (`localStorage`, key `homies.hood.v1`). Use **☰ →
Back up** now and then. **Restore** merges a backup in, and also takes Friend
Orbit and older Homies backups. Data from earlier versions of Homies moves across
automatically.

## Host free on GitHub Pages
Repo **Settings → Pages → Deploy from a branch → `main` / root**, then open
`https://asciikat.github.io/homies/`. Install it from the browser menu (or Safari
**Share → Add to Home Screen**) to get a full-screen app that works offline.
