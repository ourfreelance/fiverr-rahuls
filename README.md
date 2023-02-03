# Rahuls Site

```
minimum hugo version v0.101.0
tailwindcss version ^3.1.5
```

<br />

# Setup dev env

Run "npm install" (first time only)

Then configure `config.yaml` to setting your name, description, email, social media link and footer menu list

# Run hugo server

1. run hugo server

```
hugo server
```

2. run tailwindcss server (if you edit some style with tailwindcss)

```
npm run dev
```

Tailwind CSS file located at `./tailwindcss`.
Generated Tailwind CSS located at `./static/css/main.css`.

# Build hugo site

```
hugo --ignoreCache --minify
```

<br />

# Create your new portfolio

```
hugo new portfolio/your-portfolio-name.md
```
and then edit file located at `./content/portfolio/your-portfolio-name.md` setup frontmatter, change thumbnail image and portfolio link

# Create your new blog post

```
hugo new blog/your-blog-title.md
```

and then edit file located at `./content/blog/your-blog-title.md`, setup frontmatter, change thumbnail image and lets write your content

<br />

# Change home page wording

open file located at  `./content/home/hero.md`, `./content/home/portfolio.md`, `./content/home/about.md`. than edit wording you want change.

# Change about company wording

open file located at  `./content/about-company.md`. than edit wording you want change.

<br />

# Markdown custom shortcode

## rawhtml

you can use this shortcut if you want use html in markdown content
```
{{< rawhtml >}} 
<div class=" pt-6 pb-16 ">
    <a href="#"
      class="px-6 py-3 rounded-md border dark:border-white/10 text-primary-blue hover:bg-gray-100 transition">
      Button
    </a>
  </div> 
{{< /rawhtml >}}
```

## button-link

you can create custom button with this shortcut, also you can change button ui located at './themes/rahuls/layouts/shortcut/button-link.html'

parameter
- href for add your url
- center for centering the button
```
{{< button-link href="https://your-url.com" center="true">}}
  Your Text
{{< /button-link >}}
```

## tweet

you can add twitter post card with this shortcut

example url: https://twitter.com/dog_rates/status/1621194951601315840

copy id from the url(1621194951601315840) and paste to id=""

```
{{< tweet user="WeRateDogs" id="1621194951601315840" >}}
```

## iframe

you can use this shortcut for iframe any website.
or most use for youtube embed

example url: https://www.youtube.com/watch?v=mqqft2x_Aa4

change url to https://www.youtube.com/embed/mqqft2x_Aa4 and paste to iframe shortcut parameter

```
{{< iframe "https://www.youtube.com/embed/mqqft2x_Aa4" >}}
```