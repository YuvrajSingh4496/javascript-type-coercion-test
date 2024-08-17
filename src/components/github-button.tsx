function GitHubButton() {
  return (
    <div className="fixed p-2 bottom-5 right-5 dark:bg-white rounded-md border-2 border-black">
      <a
      className="flex flex-row gap-1 items-center justify-center" 
      href="https://github.com/YuvrajSingh4496/javascript-type-coercion-test">
      <img 
        src="https://pngimg.com/uploads/github/github_PNG80.png" 
        alt="Github"
        className="h-5 w-5" 
        />
        <p>GitHub</p>
      </a>
    </div>
  )
}

export default GitHubButton;