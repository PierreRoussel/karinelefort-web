import './citationWide.scss'
function CitationWide(props:any) {
    return (
<div class="text-banner">
  <p class="text-banner--text">
    "{props.text}"
  </p>
  <p class="text-banner--title">{props.author}</p>
</div>

    )
}

export default CitationWide;