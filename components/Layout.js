import Navigation from './navigation/Navigation'

const Layout = ({ children }) => {
    return (
        <div>
            <Navigation />
            <div className="pb-20 md:pb-0 md:pl-20 min-h-screen">
                { children }
            </div>
        </div>  
    );
}

export default Layout;