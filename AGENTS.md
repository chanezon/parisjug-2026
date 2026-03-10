# instructions to create the presentation

You can use the pptx skill to create a presentation and iterate on it.
If images are referenced in the prompt, they will be stored in the images subdirectory.
If you need to generate images based on prompts provided by the user, for example for title slide, use a subagent based on text-to-image agent to generate the image file.
The presentation should have a reference slide with full urls for all references mentioned, as clickable links. 
When using a reference to create a slide, make sure the most relevant image from the post is used as illustration for that slide, resized so it does not use all the slide real estate, and use quotes from the reference when needed.
Add a slide about the speaker at the beginning with image from images/chanezon-1-slider.png 
When using Tweets or LinkedIn as references you need to use Playwright instead of curl to get the content of the page.
If you need to read my email or Teams use the workiq plugin.


