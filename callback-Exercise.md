# 🟢 Level 1 — Easy (Warm-up + Familiar)

## Exercise 1 — Delay Message (similar vibe)

**Task:** Function `printAfter`

**Requirements:**

* Takes `message` and `time`
* After given time → print message

**Goal:**

* Same as `setTimeout`, but reinforce parameter passing

---

## Exercise 2 — Repeat Action

**Task:** Function `repeatNTimes`

**Requirements:**

* Takes:

  * `n`
  * `callback`
* Call callback `n` times with delay of 500ms each

**Example output:**

```
Running 1
Running 2
Running 3
```

**New Thinking:**

* Loop + async combo

---

## Exercise 3 — Conditional Delay (NEW)

**Task:** Function `delayedDecision`

**Requirements:**

* Takes:

  * `time`
  * `callback`
* After delay:

  * If time > 2000 → `"Too long"`
  * Else → `"Quick enough"`

**Goal:**

* Decision making inside async

---

# 🟡 Level 2 — Intermediate (Data Flow + Chaining)

## Exercise 4 — User → Profile (similar pattern)

**Task:** Build:

### `getUser`

* Takes `username`
* Returns `{ id, username }` after 1 sec

### `getProfile`

* Takes `userId`
* Returns `{ bio, followers }`

**Flow:**

* First get user
* Then profile

**Output:**

```
Username: Frag
Bio: ...
Followers: ...
```

---

## Exercise 5 — Product → Reviews

**Task:**

### `getProduct`

* Takes `productName`
* Returns `{ id, name }`

### `getReviews`

* Takes `productId`
* Returns array of reviews

**Flow:**

* Product → Reviews

**Goal:**

* Same chaining, different domain

---

## Exercise 6 — Error Handling (NEW 🔥)

**Task:** Modify flow

### `getUser`

* 50% chance:

  * success → return user
  * fail → `"User not found"`

### Callback:

* If error → print error
* Else → continue flow

**Goal:**

* First exposure to:
  👉 callback error handling pattern

---

# 🟠 Level 3 — Intermediate+ (Callback Pain Zone 😈)

## Exercise 7 — Order System

**Functions:**

1. `placeOrder`
2. `processPayment`
3. `generateInvoice`

**Flow:**

```
Order → Payment → Invoice
```

Each takes 1 sec delay

**Goal:**

* Same nesting pattern as dashboard

---

## Exercise 8 — File Processing Chain

**Functions:**

1. `readFile`
2. `processFile`
3. `saveFile`

**Twist:**

* `processFile` modifies data

**Goal:**

* Data transformation in chain

---

## Exercise 9 — Parallel Callbacks (NEW 🧠)

**Task:**

Call 2 async functions:

* `getUser`
* `getSettings`

Both take 1 sec

**Goal:**

* Print result ONLY when BOTH complete

👉 Hint: manually track completion

---

# 🔴 Level 4 — Final Boss (All Concepts Combined)

## Exercise 10 — Mini App Flow 🔥

**Task:** Build full flow:

### Functions:

1. `loginUser`
2. `getUserDetails`
3. `getUserPosts`
4. `getCommentsForPost`

---

### Flow:

```
Login
 → User Details
   → User Posts
     → For first post → get comments
```

---

### Requirements:

* Each step → 1 sec delay
* Pass data properly at each step
* Handle possible error at ANY step
* Final output:

```
User: Frag
Posts: [...]
Comments on first post: [...]
```

---