# Color-Shades-Generator
Quickly generate CSS color shades with variables from a base HEX,RGB or HSL color.

## Usage
Use this package from your command line with npx.

```
npx color-shades-generator
```

It will prompt you with some simple questions regarding your color and custom name you\ wand to give 
to your variables. 

<!-- 
![screenshot]() -->

On passed through all those questions,if you check the root directory of your project you should now have variables.css file created which has 26 CSS Variables appended and ready to use in your project. 


```css
/* variables.css */
        :root{
            --primaryColor-lighten-1:hsl(240,100,55);
            --primaryColor-lighten-2:hsl(240,100,60);
            --primaryColor-lighten-3:hsl(240,100,65);
            --primaryColor-lighten-4:hsl(240,100,70);
            --primaryColor-lighten-5:hsl(240,100,75);
            --primaryColor-lighten-6:hsl(240,100,80);
            --primaryColor-lighten-7:hsl(240,100,85);
            --primaryColor-lighten-8:hsl(240,100,90);
            --primaryColor-lighten-9:hsl(240,100,95);
            --primaryColor-darken-1:hsl(240,100,45);
            --primaryColor-darken-2:hsl(240,100,40);
            --primaryColor-darken-3:hsl(240,100,35);
            --primaryColor-darken-4:hsl(240,100,30);
            --primaryColor-darken-5:hsl(240,100,25);
            --primaryColor-darken-6:hsl(240,100,20);
            --primaryColor-darken-7:hsl(240,100,15);
            --primaryColor-darken-8:hsl(240,100,10);
            --primaryColor-darken-9:hsl(240,100,5);
            --primaryColor-greyish-1:hsl(240,45,50);
            --primaryColor-greyish-2:hsl(240,40,50);
            --primaryColor-greyish-3:hsl(240,35,50);
            --primaryColor-greyish-4:hsl(240,30,50);
            --primaryColor-greyish-5:hsl(240,25,50);
            --primaryColor-greyish-6:hsl(240,20,50);
            --primaryColor-greyish-7:hsl(240,15,50);
            --primaryColor-greyish-8:hsl(240,10,50);
        }
```


