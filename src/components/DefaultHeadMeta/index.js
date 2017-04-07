import React, { PropTypes } from "react"
import Helmet from "react-helmet"

// Initialize Firebase
// TODO: Replace with your project's customized code snippet
const firebase = (typeof window !== "undefined") ? require('firebase'): null

if (firebase) {
  var config = {
    apiKey: "AIzaSyCizKsxwsbBhV9afNaRy8aio8VChjkGpnU",
    authDomain: "sgfct-c5557.firebaseapp.com",
    databaseURL: "https://sgfct-c5557.firebaseio.com",
    projectId: "sgfct-c5557",
    storageBucket: "sgfct-c5557.appspot.com",
    messagingSenderId: "129125250884"
  };
  firebase.initializeApp(config);
}

const DefaultHeadMeta = (props, { metadata: { pkg } }) => (
  <div hidden>
    <Helmet
      meta={ [
        {
          name: "generator", content: `${
          process.env.PHENOMIC_NAME } ${ process.env.PHENOMIC_VERSION }`,
        },
        { property: "og:site_name", content: pkg.name },
        { name: "twitter:site", content: `@${ pkg.twitter }` },
        ...props.meta ? props.meta : [],
      ] }
      script={ [
        { src: "https://cdn.polyfill.io/v2/polyfill.min.js" +
        "?features=es6&flags=gated" },
        ...props.scripts ? props.scripts : [],
      ] }
    />

    { /* meta viewport safari/chrome/edge */ }
    <Helmet
      meta={ [ {
        name: "viewport", content: "width=device-width, initial-scale=1",
      } ] }
    />
    <style>{ "@-ms-viewport { width: device-width; }" }</style>
  </div>
)

DefaultHeadMeta.propTypes = {
  meta: React.PropTypes.arrayOf(React.PropTypes.object),
  scripts: React.PropTypes.arrayOf(React.PropTypes.object),
}

DefaultHeadMeta.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default DefaultHeadMeta
