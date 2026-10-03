# Homies × Mission Possible

Homies is its own app for now. Later it can become a **Homies** tab in Mission
Possible, next to Today, Tomorrow, Jail, Ezycal and Notes.

## Step 1: the tab (same trick as Ezycal)

Mission Possible already shows the calendar in an iframe at `../calendar/?embed=1`.
Homies works the same way: add a `homies` tab whose panel holds
`<iframe src="../homies/?embed=1">`. With `?embed=1` Homies skips its service
worker so it sits cleanly inside the board.

## Step 2: hear about every move (already built into Homies)

Both apps live on `asciikat.github.io`, so Homies can post to the board. Inside
the iframe, every logged contact sends:

```js
{ source: 'homies', v: 3, type: 'win',
  homieId, name, crew, tier,   // tier: 'social' | 'text' | 'call' | 'irl'
  vibe,                        // 'nurture' | 'neutral' | 'toxic'
  prize,                       // cash Homies paid out (0 for toxic)
  cash }                       // Homies' new total
```

Mission Possible side, roughly:

```js
addEventListener('message', (e) => {
  if (e.origin !== location.origin || e.source !== $('homies-frame').contentWindow) return;
  const d = e.data;
  if (d && d.source === 'homies' && d.type === 'win' && d.prize) { /* pay d.prize into the board's cash */ }
});
```

## Ideas for making them one game

1. **One wallet.** Homies payouts land in Mission Possible's cash, so looking
   after your people feeds the same ranks as your jobs.
2. **Homie jobs.** Today's ×2 homie shows up as a job on the Today board.
   Finishing the job logs the contact in Homies.
3. **Crew heists count as heists.** A crew job (3 homies) or big heist (6) also
   counts toward the board's heist tracker.
4. **One social battery.** The battery check-in becomes a board-wide setting. On
   an empty battery the board hides heavy jobs and raccoon mode suggests a
   5-minute breather.
5. **Safehouse everywhere.** Turning on Safehouse in Homies also calms the board:
   no wanted stars, no Jail, just the one job that matters.
6. **Radiation as heat.** High radiation from toxic contact shows on the board as
   a heat warning, and is a nudge to keep that day light.
7. **Birthdays on Ezycal.** Homie birthdays and planned link-ups show on the
   calendar tab.
8. **One sync.** Mission Possible syncs through Firebase (`boards/{uid}`). Homies
   can sync to `homies/{uid}` in the same project, with the same Google sign-in,
   after adding one rule:
   ```
   match /homies/{uid} {
     allow read, write: if request.auth != null && request.auth.uid == uid;
   }
   ```
