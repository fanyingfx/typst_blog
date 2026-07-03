#let template(current-page: none, doc) = {

  doc
}

#show: template.with(current-page: "index")

#link(<how_to_learn_programming>)[如何学编程]

#link(<concurrency>)[关于并发]

#link(<error_handling>)[错误处理]

// To show content only in HTML, we can use Typst's `target` function:
#context if target() == "html" [
#link(<about>)[About] 
]

