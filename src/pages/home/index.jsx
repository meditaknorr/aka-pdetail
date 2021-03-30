import React from 'react';
import '../../styles/global.scss'

export default function Index() {
    return (
        <React.Fragment>
            <header className={"main-header"}>
              header
            </header>

            <main className={"main-container"}>
              <aside className={"aside-content"}>
                aside
              </aside>
              <div className={"main-content-block"}>
                <form className={"main-search-bar"} onSubmit={(e) => e.preventDefault()}>
                  <input type="text" placeholder="Write here your search parameters. E.g.: Mozambique, Portugal" onChange={() => {return}} />
                  <button className={""}>search</button>
                </form>
                <div className={"main-search-result"}>

                </div>
              </div>              
            </main>

            <footer className={"main-footer"}>
              footer
            </footer>
        </React.Fragment>
    )
}
