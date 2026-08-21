// Ambient site background.
//
// Replaces the previous WebGL "Galaxy" starfield (ogl) with two soft, blurred
// colour blobs rendered in pure CSS. The dot-grid overlay lives on <body> in
// index.css, so this component only draws the atmospheric glow.
//
// Zero JS on the render path, no canvas, no GPU context — much lighter than
// the old 3D background and it themes itself through CSS variables.
export default function SiteBackground() {
  return (
    <div className="bg-blobs" aria-hidden="true">
      <div className="blob-1" />
      <div className="blob-2" />
    </div>
  );
}
