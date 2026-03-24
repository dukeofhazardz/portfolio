import { useEffect, useState } from "react"
import menuIcon from "../assets/menu.svg"
import closeIcon from "../assets/close.svg"
import './Nav.css'

const NavBar = () => {
    const [activeSection, setActiveSection] = useState('')
    const [isScrolled, setIsScrolled] = useState(false)
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['projects', 'about', 'contact']
            const scrollPosition = window.scrollY + 100
            let currentSection = ''

            setIsScrolled(window.scrollY > 50)

            for (const section of sections) {
                const element = document.getElementById(section)
                if (element) {
                    const { offsetTop, offsetHeight } = element
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        currentSection = section
                        break
                    }
                }
            }
            setActiveSection(currentSection)
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])


    // Close drawer when clicking outside or pressing escape
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isDrawerOpen) {
                setIsDrawerOpen(false)
            }
        }

        window.addEventListener('keydown', handleEscape)
        return () => window.removeEventListener('keydown', handleEscape)
    }, [isDrawerOpen])

    // Prevent body scroll when drawer is open
    useEffect(() => {
        if (isDrawerOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }

        return () => {
            document.body.style.overflow = ''
        }
    }, [isDrawerOpen])

    const smoothScroll = (e: any, sectionId: string) => {
        e.preventDefault()
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }
    }

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen)
    }

    const closeDrawer = () => {
        setIsDrawerOpen(false)
    }

    return (
        <>
            {/* Menu Toggle Button - Mobile Only */}
            <button className="menu-toggle" onClick={toggleDrawer}>
                <img src={menuIcon} alt="Menu" />
            </button>

            {/* Overlay */}
            <div
                className={`drawer-overlay ${isDrawerOpen ? 'active' : ''}`}
                onClick={closeDrawer}
            />

            {/* Drawer Menu */}
            <div className={`drawer ${isDrawerOpen ? 'active' : ''}`}>
                <button className="drawer-close" onClick={closeDrawer}>
                    <img src={closeIcon} alt="Close" />
                </button>

                <ul className="drawer-links">
                    <li>
                        <a
                            href="#projects"
                            className={activeSection === 'projects' ? 'active' : ''}
                            onClick={(e) => smoothScroll(e, 'projects')}
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            className={activeSection === 'about' ? 'active' : ''}
                            onClick={(e) => smoothScroll(e, 'about')}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className={activeSection === 'contact' ? 'active' : ''}
                            onClick={(e) => smoothScroll(e, 'contact')}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>

            {/* Desktop Navigation */}
            <nav className={isScrolled ? 'scrolled' : ''}>
                <ul className="nav-links">
                    <li>
                        <a
                            href="#projects"
                            className={activeSection === 'projects' ? 'active' : ''}
                            onClick={(e) => smoothScroll(e, 'projects')}
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            className={activeSection === 'about' ? 'active' : ''}
                            onClick={(e) => smoothScroll(e, 'about')}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className={activeSection === 'contact' ? 'active' : ''}
                            onClick={(e) => smoothScroll(e, 'contact')}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar;