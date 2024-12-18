# Ročníkový projekt 1

Cílem tohoto projektu bylo prohloubit si znalosti v javascriptovém frameworku **ReactJS** a naučit se nové přístupy při tvorbě webových aplikací. Celý projekt jsem vytvořil inspirován designem webové stránky z videa odkaz na https://www.youtube.com/watch?v=DCTuw2P6DCU. Zatímco původní projekt byl vytvořen v NextJS, já jsem psal veškerý kód sám, pouze na základě designu a funkčnosti zobrazené ve videu.

## Webová stránka obsahuje:

- **Funkční košík**: plně implementovaný pro přidávání a správu produktů.

- **Zobrazení produktů pomocí OOP**: pro strukturovanější práci s daty.

- **Funkční přihlašování uživatele**: s ověřením přístupových údajů.


# Vysvětlení

*Jelikož je kód opravdu velký, vysvětlím zde pouze klíčové části webu:*

## React Router DOM
Jednou z důležitých funkcionalit webu je navigace mezi jednotlivými stránkami, kterou zajišťuje knihovna React Router DOM.

```jsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/sign-in" element={<SignIn />} />
  </Routes>
</BrowserRouter>
```
Každá cesta (path) určuje URL, při jejímž zadání se zobrazí odpovídající komponenta (element).

- / – Zobrazí hlavní stránku aplikace pomocí komponenty <Home />.
- /cart – Zobrazí stránku košíku s komponentou <Cart />.
- /sign-in – Umožní přístup na přihlašovací stránku s komponentou <SignIn />.




## Správa stavu košíku pomocí Context API

Pro správu stavu košíku jsem implementoval **Context API**, což umožňuje sdílet data o produktech napříč aplikací, aniž by bylo nutné předávat je skrze jednotlivé komponenty.

```jsx
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        const duplicate = cartItems.find(item => item.id === product.id);
        if (duplicate) {
            setCartItems(prev =>
                prev.map(item => item.id === product.id ? { ...item, count: item.count + 1 } : item)
            );
        } else {
            setCartItems(prev => [...prev, { ...product, count: 1 }]);
        }
    };

    const removeFromCart = (productId) => {
        setCartItems(prev => prev.filter(item => item.id !== productId));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
```

- **`CartContext`**: Kontext pro sdílení dat o košíku.  
- **`useCart`**: Custom hook, který umožňuje snadný přístup ke stavu a funkcím košíku.  
- **`CartProvider`**: Poskytuje stav a metody košíku (`addToCart`, `removeFromCart`) všem dětem obaleným touto komponentou.

---



## Struktura produktů

Data o produktech (např. Mac, iPhone, iPad, Watch) jsou strukturovaná v samostatném souboru jako pole objektů, což umožňuje jednoduché filtrování a renderování.

```jsx
const products = [
    {
        mac: {
            variations: [
                { id: 1, image: mac1, name: 'Macbook Air with M1 Chip', price: 999 },
                { id: 2, image: mac2, name: 'Macbook Air with M2 Chip', price: 1199 },
                // další produkty...
            ]
        },
        iphone: {
            variations: [
                { id: 8, image: iphone1, name: 'iPhone 13 Pro', price: 999 },
                { id: 9, image: iphone2, name: 'iPhone 13', price: 699 },
                // další produkty...
            ]
        },
        // další kategorie...
    }
];
```

- **Struktura**: Každá kategorie (Mac, iPhone, atd.) má svou vlastní kolekci produktů ve formátu `variations`.  
- **Data**: Každý produkt obsahuje atributy jako `id`, `image`, `name`, a `price`.

---



## Komponenta `Promo`

Hlavní komponenta zajišťuje zobrazování, filtrování a přidávání produktů do košíku.

```jsx
const Promo = () => {
    const { addToCart } = useCart();
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        let updatedProducts = products.map(product => product.mac.variations); // Default: Mac produkty
        setFilteredProducts(updatedProducts.flat());
    }, []);
    
    const changeType = (type) => {
        // Nastavení zobrazené kategorie
    };

    const handleOrder = (product) => {
        addToCart(product);
        // Notifikace přidání do košíku
    };

    return (
        <section className="promo">
            <div className="products">
                {filteredProducts.map(product => (
                    <div key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <p>{product.name}</p>
                        <p>${product.price}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
```

- **Filtrování produktů**: Pomocí tlačítek lze zobrazovat pouze produkty z vybrané kategorie (Mac, iPhone, atd.).  
- **Přidání do košíku**: Kliknutím na produkt se zavolá funkce `addToCart`, která ho přidá do sdíleného stavu košíku.  
- **Notifikace**: Po přidání do košíku se zobrazí dočasná notifikace s názvem přidaného produktu.


# Závěr
Protože je kód opravdu rozsáhlý, popsal jsem zde jen klíčové části, které jsou pro aplikaci nejdůležitější. Tento projekt mi pomohl lépe pochopit React a jak spravovat stav aplikace efektivně. Ačkoliv jsem se několikrát zasekl, vždycky to šlo vyřešit – stačilo se na to podívat z jiného úhlu nebo si dát pauzu.


