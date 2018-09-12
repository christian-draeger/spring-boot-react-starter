package com.example.demo

import kotlinx.html.*
import kotlinx.html.dom.createHTMLDocument
import kotlinx.html.dom.serialize
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class MainPageController {

    @GetMapping("/")
    fun renderMainPage(): String {
        return renderInitialMarkup()
    }
}

fun renderInitialMarkup(): String =
        createHTMLDocument().html {

            head {
                title { +"spring-boot-react-starter" }
                meta(charset = "utf-8")
                link(rel = "stylesheet", type = "text/css", href = "/dist/bundle.css") {}
                style {
                    +"""
                        body {
                            background-color: #1a1a1a;
                            margin: 0;
                            padding: 0;
                        }
                    """.trimIndent()
                }
            }

            body {
                div {
                    id = "root"
                }
                script(src = "/dist/bundle.js") { }
            }
        }.serialize(true)
