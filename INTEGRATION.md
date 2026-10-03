# Homies × Mission Possible

The plan: Homies becomes a **Homies** tab in Mission Possible, next to Today,
Tomorrow, Jail, Ezycal and Notes. This file lists the ideas and the message
contract that's already built into Homies.

## Step 1: the tab (same trick as Ezycal)

Mission Possible already shows the calendar in an iframe at `../calendar/?embed=1`.
Homies works the same way:

```js
// Mission Possible index.html
const HOMIES_URL = '../homies/?embed=1';
```

Add `homies` to `TAB_ORDER`, `TAB_EL`, `TAB_NAME` and `PANEL_TABS`, with a panel
holding `<iframe src="../homies/?embed=1">`. With `?embed=1` Homies drops its film
grain and skips its service worker, so it sits cleanly inside the board.

## Step 2: talk to each other (already built into Homies)

Both apps are on `asciikat.github.io`, so they can talk with `postMessage`.
Homies only accepts messages from its parent page on the same origin.

**Homies → Mission Possible**

| `type`   | When | Fields |
|----------|------|--------|
| `ready`  | Homies loaded inside the board | |
| `move`   | You logged a move | `homieId`, `name`, `kind`, `size` (0–4), `rep`, `respect`, `rank` |
| `add-job`| You tapped **Put it on my board** | `homieId`, `name`, `text` (e.g. "Reach out to Sam") |

Every message has `source: 'homies'` and `v: 1`.

**Mission Possible → Homies**

| `type`     | What it does | Fields |
|------------|--------------|--------|
| `hello`    | Tells Homies what the board supports. `features: ['jobs']` makes the **Put it on my board** button appear on today's contact mission | `features` |
| `job-done` | A homie job was finished on the board: Homies logs the move | `homieId`, `kind` (optional, defaults to `text`) |

Every message needs `source: 'mission-possible'`.

Mission Possible side, roughly:

```js
const homiesFrame = $('homies-frame');
addEventListener('message', (e) => {
  if (e.origin !== location.origin || e.source !== homiesFrame.contentWindow) return;
  const d = e.data;
  if (!d || d.source !== 'homies') return;
  if (d.type === 'ready') {
    homiesFrame.contentWindow.postMessage({ source: 'mission-possible', type: 'hello', features: ['jobs'] }, location.origin);
  }
  if (d.type === 'add-job') { /* add a job with d.text and remember d.homieId on it */ }
  if (d.type === 'move' && d.rep) { /* pay cash: see the ideas below */ }
});
// when a job that has a homieId is finished:
homiesFrame.contentWindow.postMessage({ source: 'mission-possible', type: 'job-done', homieId, kind: 'text' }, location.origin);
```

## Ideas for making them one game

1. **Homie jobs.** "Put it on my board" turns today's contact mission into a job
   on Today. Finishing the job logs the move in Homies, and the blip slides in
   toward the middle of the radar.
2. **Respect pays cash.** Every move pays out in Mission Possible money (a text
   $20, a call $35, a link-up $50), so looking after your friends feeds the same
   wallet and rank ladder as your to-dos.
3. **Crew heists.** Mission Possible scores a heist every 5 finished jobs. Add a
   crew heist: reach out to 3 different homies in a week, get a heist bonus and
   the "Gangsta!!!" overlay.
4. **Birthday Big Score.** When a birthday is 2 weeks away, offer to make it The
   Big Score, with prep steps already filled in: pick a gift, write the card,
   book the dinner. Cashing it in logs a link-up.
5. **Birthdays on Ezycal.** Homie birthdays (and link-ups you plan) show up on
   the calendar tab.
6. **One fuel gauge.** Homies' fuel and the board's raccoon mode share a "how
   much have I got today" setting, so a Fumes day shrinks both the job list and
   the moves on offer.
7. **Safehouse for everything.** Safehouse mode in Homies switches the board into a
   gentle mode too: no wanted stars, no Jail, just the one or two jobs that matter.
8. **One sync.** Mission Possible already syncs through Firebase (`boards/{uid}`).
   Homies can sync to `homies/{uid}` in the same project, with the same Google
   sign-in, after adding one more rule:
   ```
   match /homies/{uid} {
     allow read, write: if request.auth != null && request.auth.uid == uid;
   }
   ```
9. **Wanted level, the kind version.** Mission Possible's stars mean urgent. For
   homies, a star could appear when *they* reached out and you haven't replied
   yet. It cools off by itself, like the job stars do at 7 AM.
10. **Hang timer.** Raccoon mode's timers become a "hang timer": start it
    when you call someone and it logs the call when you stop.
