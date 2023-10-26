import 'bootstrap/dist/css/bootstrap.min.css';

export const Ressources = () => {
    return (
        <main>
            <h1>Ressources de la veille technologique:</h1>
            <ul className="mt-2">
                <li className="mt-2"><a className="underline" href="https://www.blogdumoderateur.com/">BDM : Blog Du Modérateur</a></li>
                <li className="mt-2"><a className="underline" href="https://discord.gg/agnes#475">Mon compte Discord</a></li>
                <li className="mt-2"><a className="underline " href="https://digitiz.fr/blog/langages-de-programmation/">Python en top 1</a></li>
            </ul>
            <div className="text-center">
                <img className="my-5 py-5 m-auto" src="../images/Languages.png" alt="imag" width={600} />
            </div>
        </main>
    )
}