# Superhero - a jQuery plugin

![Super hero rules](img/superhero.jpg)

> Yeh! You just a click to be grant super powers

## I love superpower but what can I do now ?

You love big, flat hero image header in your face? Here is is the easiest way to do so.

--- ---------------------- ---

## What you need

You need to link jquery and the superhero plugin file to your html document. Here's how

- In your **head** tag link the **super hero stylesheet** *(Do you feel the power flow ?)*
```html
<head>
    <link rel="stylesheet" href="css/superhero.css">
</head>
```
- At the bottom of your **body** add **jQuery** and the **super hero script**
```html
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js"></script>
  <script src="js/jquery.superhero.js"></script>
  <script src="js/script.js"></script>
```

## Configuration

#### Convention over Configuration

The default selector for this heroic section is ``
if you need to change it go the `jquery.superhero.js`

```javascript
  var selector = '.myAwsomeCssClass';
```

### Data your html pimped super belt

On your hero section tag add one of this attribute

| Attributes  | Description | Defalt value |
| ----------- | ----------- | ------------ |
| data-img-path           | path to your image               | img/hero-bg.jpg          |
| data-bg-color           | the overlay background color     | #000                     |
| data-bg-opacity         | the overlay opacity              | 0.4                      |
| data-gradient-start     | the gradient overlay start color | default is data-bg-color |
| data-gradient-stop      | the gradient overlay end color   | default is data-bg-color |
| data-gradient-direction | the gradient overlay's direction | to right                 |

You should not mix `data-bg-color` with `data-gradient-xxx` *(data-gradient-start/data-gradient-stop/data-gradient-direction)*

> exemple

```html
<header class="superhero sh-height-65 sh-center" data-img-path="/img/superhero.jpg"  data-bg-opacity="0.5" data-gradient-start="#fff" data-gradient-stop="#000" data-gradient-direction="to bottom">
  <div class="headings">
    <h1>Hello, I've got super powers and you...?</h1>
  </div>
</header>
```
