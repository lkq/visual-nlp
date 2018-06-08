
import spark.Request
import spark.Response
import spark.Spark

fun main(args: Array<String>) {
    println("server started")
    Spark.port(2000)
    Spark.get("/", { request: Request, response: Response ->
        "Hello World!"
    })
}