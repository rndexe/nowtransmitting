
# nowtransmitting
## Build and run

```sh
npm install
npm run build
npm run browsersync
```

The static site would be built at `_site`

## CMS

- Netlify CMS configuration file is at `src/admin/config.yml`
- This includes folder collections for all programme types, and individual file collections for Exhibits, Social rooms and co-vids.
- All entries are duplicated for kannada.

## Exhibits

- All data from the cms is stored is under `src/exhibits/` in the form of `.md` files with frontmatter data
- Layouts are present under `src/_includes/` with the exhibit file names
- Common layout file for all exhibits at `src/_includes/exhibit_commmon.html`

## Programmes

- Data from cms stored at `src/programmes/` under indvidual programme types
- Layouts present under `src/_includes/programmes` 
- Common layout files is at `src/_includes/programmes/layout_programme.html`

## Social Rooms

- Data from cms stored at `src/socialroom`
- Layouts present under `src/_includes/rooms`

## Co-vids

- All data from cms stored under `src/covids`
- Common layout file for all co-vids present at `src/_includes/covids`

## Other Top level pages

#### Overview pages
Present at the top level for exhibits, programmes, covids, socialroom as `src/exhibits.html`, `src/calendar.html`, `src/covids.html`, `src/socialroom.html` respectively.

#### "In your words" and "Through your eyes"
- Data from the cms stored at `src/in-your-words.md` and `src/through-your-eyes.md`
- Layouts present under `src/_includes/rooms`

### Remaining
About, Activity Handbook and Mediator led sessions are not connected to the cms and have their html files directly at the top level as `src/about.html`, `src/activity-handbook.html` and `src/mediator-led-sessions.html`

**Note: All individual layout files derive their layout from** `src/_includes/default.html`

## Kannada 

- All data stored under `src/kn` as the same directory structure as for english
- Layout files remain the same 
