package com.example.demo

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class DataController {

    @GetMapping("/data")
    fun renderMainPage(): ResultSet {
        return ResultSet()
    }
}

data class ResultSet(
        var result1: JobResult = JobResult(jobName = "job 1"),
        val result2: JobResult = JobResult(jobName = "job 2"),
        val result3: JobResult = JobResult(jobName = "job 3"),
        val result4: JobResult = JobResult(jobName = "job 4")
)

data class JobResult(
        var jobName: String = "job name",
        val status: String = "default status",
        val successCount: Int = -1,
        val failCount: Int = -1
)
