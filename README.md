# Ročníkový projekt 1

Cílem tohoto projektu bylo prohloubit si znalosti v javascriptovém frameworku **ReactJS** a naučit se nové přístupy při tvorbě webových aplikací. Celý projekt jsem vytvořil inspirován designem webové stránky z videa odkaz na https://www.youtube.com/watch?v=DCTuw2P6DCU. Zatímco původní projekt byl vytvořen v NextJS, já jsem psal veškerý kód sám, pouze na základě designu a funkčnosti zobrazené ve videu.

## Webová stránka obsahuje:

- **Funkční košík**: plně implementovaný pro přidávání a správu produktů.

- **Zobrazení produktů pomocí OOP**: pro strukturovanější práci s daty.

- **Funkční přihlašování uživatele**: s ověřením přístupových údajů.


## Vysvětlení

*Jelikož je kód opravdu velký, vysvětlím zde pouze klíčové části webu:*

Jednou z důležitých funkcionalit webu je navigace mezi jednotlivými stránkami, kterou zajišťuje knihovna React Router DOM.

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/cart" element={<Cart />}></Route>
    <Route path='/sign-in' element={<SignIn />}></Route>
  </Routes>
</BrowserRouter>

Každá cesta (path) určuje URL, při jejímž zadání se zobrazí odpovídající komponenta (element).

- / – Zobrazí hlavní stránku aplikace pomocí komponenty <Home />.
- /cart – Zobrazí stránku košíku s komponentou <Cart />.
- /sign-in – Umožní přístup na přihlašovací stránku s komponentou <SignIn />.


