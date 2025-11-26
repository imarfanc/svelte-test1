<script>
  import "../app.css";
</script>

<div class="space-y-8 p-8">
  <!-- Theme Dropdown -->
  <div class="mb-72 dropdown">
    <div tabindex="0" role="button" class="m-1 btn">
      Theme
      <svg
        width="12px"
        height="12px"
        class="inline-block opacity-60 fill-current w-2 h-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2048 2048">
        <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
      </svg>
    </div>
    <ul tabindex="-1" class="z-1 bg-base-300 shadow-2xl p-2 rounded-box w-52 dropdown-content">
      <li>
        <input
          type="radio"
          name="theme-dropdown"
          class="btn-block justify-start w-full theme-controller btn btn-sm btn-ghost"
          aria-label="Default"
          value="default" />
      </li>
      <li>
        <input
          type="radio"
          name="theme-dropdown"
          class="btn-block justify-start w-full theme-controller btn btn-sm btn-ghost"
          aria-label="Retro"
          value="retro" />
      </li>
      <li>
        <input
          type="radio"
          name="theme-dropdown"
          class="btn-block justify-start w-full theme-controller btn btn-sm btn-ghost"
          aria-label="Cyberpunk"
          value="cyberpunk" />
      </li>
      <li>
        <input
          type="radio"
          name="theme-dropdown"
          class="btn-block justify-start w-full theme-controller btn btn-sm btn-ghost"
          aria-label="Valentine"
          value="valentine" />
      </li>
      <li>
        <input
          type="radio"
          name="theme-dropdown"
          class="btn-block justify-start w-full theme-controller btn btn-sm btn-ghost"
          aria-label="Aqua"
          value="aqua" />
      </li>
    </ul>
  </div>

  <!-- Alerts -->
  <div class="space-y-2">
    <div role="alert" class="alert alert-info alert-soft">
      <span>12 unread messages. Tap to see.</span>
    </div>
    <div role="alert" class="alert alert-success alert-soft">
      <span>Your purchase has been confirmed!</span>
    </div>
    <div role="alert" class="alert alert-warning alert-soft">
      <span>Warning: Invalid email address!</span>
    </div>
    <div role="alert" class="alert alert-error alert-soft">
      <span>Error! Task failed successfully.</span>
    </div>
  </div>

  <!-- Card -->
  <div class="bg-base-100 shadow-sm w-96 card">
    <div class="card-body">
      <h2 class="card-title">Card title!</h2>
      <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
      <div class="justify-end card-actions">
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>

  <!-- Toast -->
  <div class="toast">
    <div class="alert alert-info">
      <span>New message arrived.</span>
    </div>
  </div>
</div>
