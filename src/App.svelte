<script>
    import { Router, Link, Route } from "svelte-routing";
    import Home from "./routes/Home.svelte";
</script>

<Router url="{url}">
    <nav>
        <Link to="/">Inicio</Link>
    </nav>
    <Route path="/">
        <Home></Home>
    </Route>
</Router>