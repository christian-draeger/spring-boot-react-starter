package com.example.demo

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class DataController {

    @GetMapping("/data")
    fun renderMainPage(): List<JobResult> {
        return listOf(
                JobResult(jobName = "job 1"),
                JobResult(jobName = "job 2"),
                JobResult(jobName = "job 3"),
                JobResult(jobName = "job 4")
        )
    }
}

data class JobResult(
        var jobName: String = "job name",
        val status: String = "default status",
        val successCount: Int = -1,
        val failCount: Int = -1
)
