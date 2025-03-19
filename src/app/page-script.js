"use client"

import { useEffect } from "react"

export default function PageScript() {
  useEffect(() => {
    // Tab functionality
    const tabButtons = document.querySelectorAll(".tab-button")
    const tabContents = document.querySelectorAll(".tab-content")

    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const tabId = button.getAttribute("data-tab")

        // Remove active class from all buttons and contents
        tabButtons.forEach((btn) => btn.classList.remove("active"))
        tabContents.forEach((content) => content.classList.remove("active"))

        // Add active class to clicked button and corresponding content
        button.classList.add("active")
        document.getElementById(`${tabId}-tab`).classList.add("active")
      })
    })

    // Accordion functionality
    const accordionButtons = document.querySelectorAll(".accordion-button")

    accordionButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const content = button.nextElementSibling
        const icon = button.querySelector(".accordion-icon")

        // Toggle content visibility
        if (content.style.maxHeight) {
          content.style.maxHeight = null
          icon.textContent = "+"
        } else {
          content.style.maxHeight = content.scrollHeight + "px"
          icon.textContent = "−"
        }
      })
    })

    // Animation on scroll
    const animateElements = document.querySelectorAll(".animate-on-scroll")

    const checkIfInView = () => {
      animateElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
        const windowHeight = window.innerHeight

        if (elementTop < windowHeight - 100) {
          element.classList.add("visible")
        }
      })
    }

    // Check on load
    checkIfInView()

    // Check on scroll
    window.addEventListener("scroll", checkIfInView)

    // Cleanup
    return () => {
      window.removeEventListener("scroll", checkIfInView)
    }
  }, [])

  return null
}

