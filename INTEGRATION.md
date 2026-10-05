# Homies × Mission Possible

The Hood (in the `homies` repo) is its own app for now. Later it can become a **Homies** tab in Mission
Possible, next to Today, Tomorrow, Jail, Ezycal and Notes.

## Step 1: the tab (same trick as Ezycal)

Mission Possible already shows the calendar in an iframe at `../calendar/?embed=1`.
The Hood works the same way: add a `homies` tab whose panel holds
`<iframe src="../homies/?embed=1">`. With `?embed=1` The Hood skips its service
worker so it sits cleanly inside the board.

## Step 2: hear about every interaction (already built into The Hood)

Both apps live on `asciikat.github.io`, so The Hood can post to the board. Inside
the iframe, every logged interaction sends:

```js
{ source: 'homies', v: 4, type: 'hit',
  homieId, name, crew,
  kind,     // 'saw' | 'call' | 'text' | 'online'
  hit,      // 'golden' | 'good' | 'meh' | 'off' | 'bad' | null
  status,   // the Homie's status now: 'golden' | 'dope' | 'neutral' | 'watch' | 'toxic'
  heat }    // 0 to 5 stars
```

Mission Possible side, roughly:

```js
addEventListener('message', (e) => {
  if (e.origin !== location.origin || e.source !== $('homies-frame').contentWindow) return;
  const d = e.data;
  if (d && d.source === 'homies' && d.type === 'hit') { /* pay cash for good hits, raise heat on bad ones */ }
});
```

## Ideas for making them one game

1. **Missions become jobs.** Hood missions ("Call Mum", "Catch up with Sam")
   show up on the Today board, and finishing either one passes both.
2. **Respect pays.** Mission Passed and Golden or Good hits pay into Mission
   Possible's cash, so looking after your people feeds the same ranks.
3. **Heat on the board.** When a Homie hits 3 or more stars, the board shows a
   heat warning and the job list goes light for the day.
4. **Bail everywhere.** A Bail button on the board too. "Don't reply tonight"
   lands in Jail-free mode: no wanted stars, just rest.
5. **One Safehouse.** Turning on Safehouse in either app calms both.
6. **Birthdays and catch-ups on Ezycal.** Planned catch-ups show on the
   calendar tab.
7. **One sync (built).** Mission Possible syncs through Firebase (`boards/{uid}`).
   The Hood syncs to `homies/{uid}` and Ezycal to `calendar/{uid}` in the same project,
   with the same Google sign-in, after adding these rules:
   ```
   match /homies/{uid} {
     allow read, write: if request.auth != null && request.auth.uid == uid;
   }
   match /calendar/{uid} {
     allow read, write: if request.auth != null && request.auth.uid == uid;
   }
   ```
