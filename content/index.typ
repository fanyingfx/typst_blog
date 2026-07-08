#let template(current-page: none, index_class: none, doc) = {
  html.elem("body", attrs: (class: index_class), doc)
}

#show: template.with(current-page: "index", index_class: "index")
=== #link(<how_to_learn_programming>)[如何学编程]

=== #link(<basics>)[一些概念]

=== #link(<concurrency>)[关于并发]

=== #link(<error_handling>)[错误处理]

=== #link(<testing>)[关于测试]

=== #link(<memory>)[内存管理]

=== #link(<functional_programming>)[函数式编程]

=== #link(<reading>)[推荐阅读]


