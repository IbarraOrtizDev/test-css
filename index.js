function generatePerson( opacity ) {
    return `<svg
    width="100%"
    height="100%"
    style="opacity: ${opacity}"
    viewBox="0 0 210 259"
    version="1.1"
    id="svg5"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:svg="http://www.w3.org/2000/svg">
   <defs
      id="defs2" />
   <g
      id="layer1">
     <g
        id="g9707"
        transform="translate(15.715448,31.430896)">
       <g
          id="g9715"
          transform="matrix(0,4.5133683,-4.5133683,0,202.92918,-37.907991)">
         <circle
            style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.965764;stroke-miterlimit:0"
            id="path846"
            cx="30.061121"
            cy="28.196545"
            r="19.517118" />
         <g
            id="g5605"
            transform="translate(-63.661357,-63.384508)"
            style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-opacity:1">
           <g
              id="g7163"
              style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-opacity:1">
             <path
                id="path1257"
                style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.999999px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
                d="m 432.87891,300.84766 c -37.78833,0.17675 -88.8708,14.23272 -103.66797,56.38281 l -0.19336,49.4707 c 5.78625,20.74165 20.51613,32.45315 37.51562,42.91602 9.51203,5.43367 32.99376,13.97526 32.15625,5.70312 -59.13327,-27.54913 -63.46475,-140.44146 37.72852,-148.98437 101.19326,8.54291 97.01218,121.43524 37.87891,148.98437 -0.83751,8.27214 22.64423,-0.26945 32.15624,-5.70312 16.99953,-10.46287 31.72936,-22.17437 37.51563,-42.91602 l -0.19531,-49.4707 c -15.27425,-43.50904 -69.21075,-57.08352 -107.2793,-56.35742 -6.4e-4,-2e-5 -0.001,1e-5 -0.002,0 -1.18902,-0.0227 -2.39496,-0.0311 -3.61328,-0.0254 z"
                transform="matrix(0.26458333,0,0,0.26458333,-21.74921,-10.53)"
                 />
           </g>
         </g>
         <g
            id="g8974"
            style="fill:#000000;fill-opacity:1"
            transform="translate(-85.410567,-73.914508)">
           <path
              id="path7447"
              style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.999999px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
              d="m 436.41797,287.67383 c -32.47907,0.12018 -54.79637,4.22664 -78.62109,20.18359 -3.12947,2.39302 -1.36271,10.38486 0,9.63281 22.24529,-15.46221 39.96257,-20.2555 78.62109,-19.97461 38.65852,-0.28089 56.37578,4.5124 78.62109,19.97461 1.36271,0.75205 3.12949,-7.23979 0,-9.63281 -23.82474,-15.95695 -46.14202,-20.06341 -78.62109,-20.18359 z"
              transform="scale(0.26458333)" />
         </g>
       </g>
     </g>
   </g>
  </svg>`;
}

function minificar( svg ) {
    return svg.replace( /\n/g, '' ).replace( />\s+</g, '><' );
}

function toURL( svg ) {
    svg = svg.trim();
    // remove xml, doctype, generator...
    svg = svg.slice(svg.indexOf('<svg'));
    // soft validate
    if (!svg.startsWith('<svg') || !svg.endsWith('svg>')) return;
    // add namespace if necessary
    if (!svg.includes('http://www.w3.org/2000/svg')) svg = svg.replace(/<svg/g, `<svg xmlns='http://www.w3.org/2000/svg'`);
    // remove comments
    svg = svg.replace(/<!--.{1,}-->/g, '');
    // remove unnecessary attributes
    svg = svg.replace(/version=[\"\'](.{0,}?)[\"\'](?=[\s>])/g, '');
    // svg = svg.replace(/id=[\"\'](.{0,}?)[\"\'](?=[\s>])/g, '');
    // svg = svg.replace(/class=[\"\'](.{0,}?)[\"\'](?=[\s>])/g, '');
    // replace nested quotes
    svg = svg.replace(/"'(.{1,})'"/g, '\'$1\'');
    // replace double quotes
    svg = svg.replace(/"/g, '\'');
    // remove empty spaces between tags
    svg = svg.replace(/>\s{1,}</g, '><');
    // remove duplicate spaces
    svg = svg.replace(/\s{2,}/g, ' ');
    // trim again
    svg = svg.trim();
    // soft validate again
    if (!(svg.startsWith('<svg')) || !(svg.endsWith('svg>'))) return;
    // replace ampersand
    svg = svg.replace(/&/g, '&amp;');
    // encode only unsafe symbols
    return `data:image/svg+xml,${encodeURIComponent( svg )}`;
}


function svgToDataURI(svg) {
    
    // build data uri
    svg = `data:image/svg+xml,${svg}`;
    // ok, ship it!
    return svg;
  }
  