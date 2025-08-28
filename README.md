# A National Service Website

# Question 1: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

---
# Answer:

---

- getElementById("id")

- Finds one element by its id.

- Always returns a single element.

- getElementsByClassName("class")

- Finds all elements with the same class.

- Returns a list (collection), not just one.

- querySelector("selector")

- Finds the first element that matches a CSS selector (like #id, .class, div p).

- Returns one element.

- querySelectorAll("selector")

- Finds all elements that match a CSS selector.

- Returns a NodeList (like an array) of elements

---

# Question 2: How do you create and insert a new element into the DOM?

# Answer:

---

- document.createElement("tag") → to create a new element.

- .appendChild() or .append() → to insert it into the page.

---


# Question 3: What is Event Bubbling and how does it work?
---

# Answer:

---

- Event Bubbling means: when you click on a child element, the event also travels (or "bubbles up") to its parent elements.

- The event starts from the element that was clicked → then goes up step by step through its parents → all the way to the <body>.

---

# Question 4: What is Event Delegation in JavaScript? Why is it useful?

---

# Answer:

---

- Event Delegation is a technique where you add an event listener to a parent element, and let the event "bubble up" from the children.

- Instead of attaching listeners to every child, you use one listener on the parent.

---

# Question 5: What is the difference between preventDefault() and stopPropagation() methods?

---

# Answer:

---
- preventDefault() → Stops the default action of an element.

- Example: Prevent a link from opening or a form from submitting.

- stopPropagation() → Stops the event from bubbling up to parent elements.

