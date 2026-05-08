# 🎨 JS Traffic Light

## Objective

You'll build an animated traffic light for your web page using HTML5 semantic elements, CSS Grid template areas, and JavaScript.

## 📅 Submitting Your Work

**Due: MON 11 MAY 2026**

- Create NEW GitHub repo: `js-traffic-light`
- Upload project files to repo
- Copy/paste repo link into [GitHub URL Form](https://forms.gle/diNodcRDNmEKQ5TW9)


## ✅ Requirements

Your project is complete when you have:

- created the general page layout using semantic HTML5 elements
- used CSS Grid template areas to build the traffic light
- written the JavaScript needed to handle the switching and timing of the traffic light


## 🔗 Resources

- [JS FOR Loops / YouTube](https://youtu.be/ZOQYIWLngSU?si=PghmJbrYd4TXe92_)
- Download [starter files](https://github.com/NorthEdWAD/web-hub/tree/main/project-12-traffic-light/starter) from this repo
- [CSS Grid template areas / YouTube](https://youtu.be/83iQbQoEmHM?si=aoULcuTroCqiYAhC)

## 🛠️ Getting Started

<details>
<summary>Part 1: The HTML</summary>

Use semantic HTML5 elements like `<main>`, `<header>` and `<figure>` to build the page skeleton.

Read the HTML comments below:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>JS Traffic Light</title>
  </head>
  <body>
    <!-- Wrap everything in a <main> element -->
    <main>
      <!-- Add an h1 in your <header> for your project title -->
      <header>
        <h1>JavaScript Traffic Light</h1>
      </header>

      <!-- Add a <section> element under your <header> -->
      <section>
        <!-- Inside your <section> element, add a <figure> element with a class of 'housing' -->
        <figure class="housing">
          <!-- Inside your <figure> element, add three <div> elements, each with a class of 'light' -->
          <!-- To the first <div>, also assign an id of 'red-light' -->
          <!-- To the second <div>, also assign an id of 'yellow-light' -->
          <!-- To the third <div>, also assign an id of 'green-light' -->
          <div class="light" id="red-light"></div>
          <div class="light" id="yellow-light"></div>
          <div class="light" id="green-light"></div>
        </figure>
      </section>
    </main>
  </body>
</html>
```

</details>

<details>
<summary>Part 2: Page Layout with Grid Template Areas</summary>

You'll use CSS Grid to center the page in the browser window and to arrange the parts of the traffic light.

- Create an external style sheet and link it to your traffic light web page
- Define your template areas on the `<main>` element to map out where the header and the light sections belong on the page.

```css
main {
  display: grid;
  grid-template-areas:
    "top-header"
    "light-section";
  row-gap: 20px; /* Add a gap between the rows */
  justify-items: center;
}

header {
  grid-area: top-header;
}

section {
  grid-area: light-section;
}
```

</details>


<details>

<summary>Part 3: Styling the Traffic Light Housing</summary>

You'll use CSS Grid to stack the traffic lights vertically. There will be a gap of 15px between each light.

```css
/* Define a CSS class named housing */
.housing {
  display: grid;
  grid-template-rows: repeat(3, 80px); /* Rows have height of 80px */
  row-gap: 15px;
  background-color: #333; /* Your choice */
  padding: 20px;
  border-radius: 40px;
}

/* Define another CSS class named light */
.light {
  width: 80px; /* Set width to 80px */
  height: 80px; /* Set height to 80px */
  background-color: #555; /* Your choice */
  border-radius: 50%; /* Set border-radius to 50% */
  transition: 0.3s; /* Set transition to: 0.3s */
}

/* Define special CSS class named 'on' */
/* Controls what lights look like when they are lit up */

#red-light.on {
  background-color: red;
  box-shadow: 0 0 20px #f00;
}

#yellow-light.on {
  background-color: yellow;
  box-shadow: 0 0 20px #fc0;
}

#green-light.on {
  background-color: green;
  box-shadow: 0 0 20px #0f0;
}
```

</details>

<details>
<summary>Part 4: The JavaScript</summary>

The JavaScript handles the timing and switching of the traffic lights.

We'll use a FOR loop to reset the lights and the `.className` property to update them.

```javascript
// Find each light using getElementById() method
const lights = [
  document.getElementById('red-light'),
  document.getElementById('yellow-light'),
  document.getElementById('green-light'),
]; // Don't forget the semicolon!

// Use keyword let to define a variable named current; set its value to zero (0)
let current = 0;

// Define traditional function named cycle()
// Function will reset all lights to their default state using the `.className` property

function cycle() {
  for (let i = 0; i < lights.length; i++) {
    lights[i].className = "light";
  } // End of FOR loop

  // Now turn on the current traffic light
  lights[current].className = "light on";

  // Move to next light, or back to first array element if we reach the last
  // element in the lights array

  current++;

  if (current === 3) {
    current = 0;
  }
} // End of cycle() function

// Now run the cycle() function every 2000 milliseconds (2 seconds)
// 1000 milliseconds = 1 second
setInterval(cycle, 2000);

// Call the cycle() function
cycle();
```

</details>

