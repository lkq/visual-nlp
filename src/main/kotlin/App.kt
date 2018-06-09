
import spark.Request
import spark.Response
import spark.Spark

fun main(args: Array<String>) {

    Spark.port(2001)
    Spark.get("/", { request: Request, response: Response ->
        val name = request.queryParams("name")
        "Hello $name"
    })

}