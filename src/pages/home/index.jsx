import React from 'react';
import '../../styles/global.scss'

export default function Index() {
    return (
        <React.Fragment>
            <header className={() => {return}}>

            </header>
            <div className={"main-container"}>
              <main className={() => {return}}>
                <form onSubmit={(e) => e.preventDefault()} className={"container-search-bar"}>
                  <input type="text" placeholder="Write here your search parameters. E.g.: Mozambique, Portugal" onChange={() => {return}} />
                  <button className={() => {return}}>search</button>
                </form>
                <div className={"container-search-result"}>

                </div>
              </main>
              <aside className={() => {return}}>

              </aside>
            </div>
        </React.Fragment>
    )
}
