package com.example.demo

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class DataController {

    val numberOfPanels = 10

    @GetMapping("/data")
    fun renderMainPage(): List<JobResult> {

        val result = mutableListOf<JobResult>()

        for(i in 1..numberOfPanels) {
            result.add(JobResult(jobName = "job $i"))
        }
        return result
    }
}

data class JobResult(
        var jobName: String = "job name",
        val status: String = "default status",
        val successCount: Int = -1,
        val failCount: Int = -1
)
