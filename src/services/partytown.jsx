import { partytownSnippet } from '@builder.io/partytown/integration'

function Head () {
  const snippetText = partytownSnippet()

  return (
    <script>{snippetText}</script>
  )
}

export default Head
