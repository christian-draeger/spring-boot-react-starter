package com.example.demo

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class DataController {

    @GetMapping("/data")
    fun renderMainPage(): Data {
        return Data()
    }
}

data class Data(
  val someValue: String = "Hello",
  val otherValue: String = "World"
)