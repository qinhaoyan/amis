amis.define('docs/zh-CN/components/form/treeselect.md', function(require, exports, module, define) {

  module.exports = {
    "title": "TreeSelect 树形选择器",
    "description": null,
    "type": 0,
    "group": null,
    "menuName": "TreeSelect 树形选择器",
    "icon": null,
    "order": 60,
    "html": "<div class=\"markdown-body\"><h2><a class=\"anchor\" name=\"%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8\" href=\"#%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>基本使用</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n  \"body\": [\n    {\n      \"type\": \"tree-select\",\n      \"name\": \"tree\",\n      \"label\": \"Tree\",\n      \"searchable\": true,\n      \"options\": [\n        {\n          \"label\": \"Folder A\",\n          \"value\": 1,\n          \"children\": [\n            {\n              \"label\": \"file A\",\n              \"value\": 2\n            },\n            {\n              \"label\": \"file B\",\n              \"value\": 3\n            }\n          ]\n        },\n        {\n          \"label\": \"file C\",\n          \"value\": 4\n        },\n        {\n          \"label\": \"file D\",\n          \"value\": 5\n        },\n        {\n          \"label\": \"Folder E\",\n          \"children\": [\n            {\n              \"label\": \"Folder G\",\n              \"children\": [\n                {\n                  \"label\": \"file H\",\n                  \"value\": 6\n                },\n                {\n                  \"label\": \"file I\",\n                  \"value\": 7\n                }\n              ]\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E4%BB%85%E5%B1%95%E7%A4%BA%E9%80%89%E4%B8%AD%E8%8A%82%E7%82%B9%E6%96%87%E6%9C%AC%E4%BF%A1%E6%81%AF\" href=\"#%E4%BB%85%E5%B1%95%E7%A4%BA%E9%80%89%E4%B8%AD%E8%8A%82%E7%82%B9%E6%96%87%E6%9C%AC%E4%BF%A1%E6%81%AF\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>仅展示选中节点文本信息</h2><p>设置<code>hideNodePathLabel: true</code>，可以隐藏选择框中已选择节点的祖先节点（ancestor）的<code>labelField</code>字段值，仅展示当前选中节点的<code>labelField</code>字段值。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n  \"body\": [\n    {\n      \"type\": \"tree-select\",\n      \"name\": \"tree1\",\n      \"label\": \"展示已选择节点的祖先节点的文本信息\",\n      \"value\": \"1,6,7\",\n      \"multiple\": true,\n      \"options\": [\n        {\n          \"label\": \"Folder A\",\n          \"value\": 1,\n          \"children\": [\n            {\n              \"label\": \"file A\",\n              \"value\": 2\n            },\n            {\n              \"label\": \"file B\",\n              \"value\": 3\n            }\n          ]\n        },\n        {\n          \"label\": \"file C\",\n          \"value\": 4\n        },\n        {\n          \"label\": \"file D\",\n          \"value\": 5\n        },\n        {\n          \"label\": \"Folder E\",\n          \"children\": [\n            {\n              \"label\": \"Folder G\",\n              \"children\": [\n                {\n                  \"label\": \"file H\",\n                  \"value\": 6\n                },\n                {\n                  \"label\": \"file I\",\n                  \"value\": 7\n                }\n              ]\n            }\n          ]\n        }\n      ]\n    },\n    {\n      \"type\": \"divider\"\n    },\n    {\n      \"type\": \"tree-select\",\n      \"name\": \"tree2\",\n      \"label\": \"仅展示已选择节点的文本信息\",\n      \"value\": \"1,6,7\",\n      \"multiple\": true,\n      \"hideNodePathLabel\": true,\n      \"options\": [\n        {\n          \"label\": \"Folder A\",\n          \"value\": 1,\n          \"children\": [\n            {\n              \"label\": \"file A\",\n              \"value\": 2\n            },\n            {\n              \"label\": \"file B\",\n              \"value\": 3\n            }\n          ]\n        },\n        {\n          \"label\": \"file C\",\n          \"value\": 4\n        },\n        {\n          \"label\": \"file D\",\n          \"value\": 5\n        },\n        {\n          \"label\": \"Folder E\",\n          \"children\": [\n            {\n              \"label\": \"Folder G\",\n              \"children\": [\n                {\n                  \"label\": \"file H\",\n                  \"value\": 6\n                },\n                {\n                  \"label\": \"file I\",\n                  \"value\": 7\n                }\n              ]\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%8F%AA%E5%85%81%E8%AE%B8%E9%80%89%E6%8B%A9%E5%8F%B6%E5%AD%90%E8%8A%82%E7%82%B9\" href=\"#%E5%8F%AA%E5%85%81%E8%AE%B8%E9%80%89%E6%8B%A9%E5%8F%B6%E5%AD%90%E8%8A%82%E7%82%B9\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>只允许选择叶子节点</h2><blockquote>\n<p>1.8.0 及以上版本</p>\n</blockquote>\n<p>在单选时，可通过 <code>onlyLeaf</code> 可以配置只允许选择叶子节点</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n  \"body\": [\n    {\n      \"type\": \"tree-select\",\n      \"name\": \"tree\",\n      \"label\": \"Tree\",\n      \"onlyLeaf\": true,\n      \"searchable\": true,\n      \"options\": [\n        {\n          \"label\": \"Folder A\",\n          \"value\": 1,\n          \"children\": [\n            {\n              \"label\": \"file A\",\n              \"value\": 2\n            },\n            {\n              \"label\": \"file B\",\n              \"value\": 3\n            }\n          ]\n        },\n        {\n          \"label\": \"file C\",\n          \"value\": 4\n        },\n        {\n          \"label\": \"file D\",\n          \"value\": 5\n        },\n        {\n          \"label\": \"Folder E\",\n          \"value\": \"61\",\n          \"children\": [\n            {\n              \"label\": \"Folder G\",\n              \"value\": \"62\",\n              \"children\": [\n                {\n                  \"label\": \"file H\",\n                  \"value\": 6\n                },\n                {\n                  \"label\": \"file I\",\n                  \"value\": 7\n                }\n              ]\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%A6%82%E4%BD%95%E8%AE%A9%E6%9F%90%E4%BA%9B%E8%8A%82%E7%82%B9%E6%97%A0%E6%B3%95%E7%82%B9-\" href=\"#%E5%A6%82%E4%BD%95%E8%AE%A9%E6%9F%90%E4%BA%9B%E8%8A%82%E7%82%B9%E6%97%A0%E6%B3%95%E7%82%B9-\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>如何让某些节点无法点？</h2><p>只需要对应的节点没有 value 就行，比如下面例子的目录节点都无法点，只能点文件节点</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n  \"body\": [\n    {\n      \"type\": \"tree-select\",\n      \"name\": \"tree\",\n      \"label\": \"Tree\",\n      \"searchable\": true,\n      \"options\": [\n        {\n          \"label\": \"Folder A\",\n          \"children\": [\n            {\n              \"label\": \"file A\",\n              \"value\": 2\n            },\n            {\n              \"label\": \"file B\",\n              \"value\": 3\n            }\n          ]\n        },\n        {\n          \"label\": \"Folder E\",\n          \"children\": [\n            {\n              \"label\": \"Folder G\",\n              \"children\": [\n                {\n                  \"label\": \"file H\",\n                  \"value\": 6\n                },\n                {\n                  \"label\": \"file I\",\n                  \"value\": 7\n                }\n              ]\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E6%90%9C%E7%B4%A2%E9%80%89%E9%A1%B9\" href=\"#%E6%90%9C%E7%B4%A2%E9%80%89%E9%A1%B9\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>搜索选项</h2><blockquote>\n<p><code>2.7.1</code> 及以上版本</p>\n</blockquote>\n<p>配置<code>autoComplete</code>接口可以实现从远程数据搜索目标结果，搜索的关键字段为<code>term</code>，注意搜索的逻辑需要在服务端实现。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\":\"form\",\n    \"api\":\"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"body\":[\n        {\n            \"type\":\"tree-select\",\n            \"name\":\"tree\",\n            \"label\":\"Tree\",\n            \"autoComplete\":\"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/tree/search?term=$term\",\n            \"source\":\"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/tree/search\"\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E8%87%AA%E5%AE%9A%E4%B9%89%E9%80%89%E9%A1%B9%E6%B8%B2%E6%9F%93\" href=\"#%E8%87%AA%E5%AE%9A%E4%B9%89%E9%80%89%E9%A1%B9%E6%B8%B2%E6%9F%93\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>自定义选项渲染</h2><blockquote>\n<p><code>2.8.0</code> 及以上版本</p>\n</blockquote>\n<p>使用<code>menuTpl</code>属性，自定义下拉选项的渲染内容。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n  \"body\": [\n    {\n      \"type\": \"tree-select\",\n      \"name\": \"tree\",\n      \"label\": \"Tree\",\n      \"menuTpl\": \"<div class='flex justify-between'><span>${label}</span><span class='bg-gray-200 rounded p-1 text-xs text-center w-24'>${tag}</span></div>\",\n      \"iconField\": \"icon\",\n      \"searchable\": true,\n      \"options\": [\n        {\n          \"label\": \"采购单\",\n          \"value\": \"order\",\n          \"tag\": \"数据模型\",\n          \"icon\": \"fa fa-database\",\n          \"children\": [\n            {\n              \"label\": \"ID\",\n              \"value\": \"id\",\n              \"tag\": \"数字\",\n              \"icon\": \"fa fa-check\",\n            },\n            {\n              \"label\": \"采购人\",\n              \"value\": \"name\",\n              \"tag\": \"字符串\",\n              \"icon\": \"fa fa-check\",\n            },\n            {\n              \"label\": \"采购时间\",\n              \"value\": \"time\",\n              \"tag\": \"日期时间\",\n              \"icon\": \"fa fa-check\",\n            },\n            {\n              \"label\": \"供应商\",\n              \"value\": \"vendor\",\n              \"tag\": \"数据模型(N:1)\",\n              \"icon\": \"fa fa-database\",\n              \"children\": [\n                {\n                  \"label\": \"供应商ID\",\n                  \"value\": \"vendor_id\",\n                  \"tag\": \"数字\",\n                  \"icon\": \"fa fa-check\",\n                },\n                {\n                  \"label\": \"供应商名称\",\n                  \"value\": \"vendor_name\",\n                  \"tag\": \"字符串\",\n                  \"icon\": \"fa fa-check\",\n                }\n              ]\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%B1%9E%E6%80%A7%E8%A1%A8\" href=\"#%E5%B1%9E%E6%80%A7%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>属性表</h2><p>下列属性为<code>tree-select</code>独占属性, 更多属性用法，参考<a href=\"./input-tree\">InputTree 树形选择框</a></p>\n<table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n<th>版本</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>hideNodePathLabel</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>是否隐藏选择框中已选择节点的路径 label 信息</td>\n<td></td>\n</tr>\n<tr>\n<td>onlyLeaf</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>只允许选择叶子节点</td>\n<td></td>\n</tr>\n<tr>\n<td>searchable</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>是否可检索，仅在 type 为 <code>tree-select</code> 的时候生效</td>\n<td></td>\n</tr>\n</tbody></table>\n<h2><a class=\"anchor\" name=\"%E4%BA%8B%E4%BB%B6%E8%A1%A8\" href=\"#%E4%BA%8B%E4%BB%B6%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>事件表</h2><p>当前组件会对外派发以下事件，可以通过<code>onEvent</code>来监听这些事件，并通过<code>actions</code>来配置执行的动作，在<code>actions</code>中可以通过<code>${事件参数名}</code>或<code>${event.data.[事件参数名]}</code>来获取事件产生的数据，详细请查看<a href=\"../../docs/concepts/event-action\">事件动作</a>。</p>\n<blockquote>\n<p><code>[name]</code>表示当前组件绑定的名称，即<code>name</code>属性，如果没有配置<code>name</code>属性，则通过<code>value</code>取值。</p>\n</blockquote>\n<table>\n<thead>\n<tr>\n<th>事件名称</th>\n<th>事件参数</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>change</td>\n<td><code>[name]: string</code> 组件的值 <br/><code>item: object</code>选中的节点（6.2.0 及以上版本）<br/><code>items: object[]</code>选项集合（3.6.0 及以上版本）</td>\n<td>选中值变化时触发</td>\n</tr>\n<tr>\n<td>blur</td>\n<td><code>[name]: string</code> 组件的值 <br/>``item: object<code>选中的节点（6.2.0 及以上版本）&lt;br/&gt;items: object[]</code>选项集合（3.6.4 及以上版本）</td>\n<td>输入框失去焦点时触发</td>\n</tr>\n<tr>\n<td>focus</td>\n<td><code>[name]: string</code> 组件的值 <br/><code>item: object</code>选中的节点（6.2.0 及以上版本）<br/><code>items: object[]</code>选项集合（3.6.4 及以上版本）</td>\n<td>输入框获取焦点时触发</td>\n</tr>\n<tr>\n<td>addConfirm (3.6.4 及以上版本)</td>\n<td><code>[name]: string</code> 组件的值<br/><code>item: object</code> 新增的节点信息<br/><code>items: object[]</code>选项集合</td>\n<td>新增节点提交时触发</td>\n</tr>\n<tr>\n<td>editConfirm (3.6.4 及以上版本)</td>\n<td><code>[name]: object</code> 组件的值<br/><code>item: object</code> 编辑的节点信息<br/><code>items: object[]</code>选项集合</td>\n<td>编辑节点提交时触发</td>\n</tr>\n<tr>\n<td>deleteConfirm (3.6.4 及以上版本)</td>\n<td><code>[name]: string</code> 组件的值<br/><code>item: object</code> 删除的节点信息<br/><code>items: object[]</code>选项集合</td>\n<td>删除节点提交时触发</td>\n</tr>\n<tr>\n<td>deferLoadFinished (3.6.4 及以上版本)</td>\n<td><code>[name]: object</code> 组件的值<br/><code>result: object</code> deferApi 懒加载远程请求成功后返回的数据 <br/><code>items: object[]</code>选项集合</td>\n<td>懒加载接口远程请求成功时触发</td>\n</tr>\n<tr>\n<td>add（不推荐）</td>\n<td><code>[name]: object</code> 新增的节点信息<br/><code>items: object[]</code>选项集合（&lt; 2.3.2 及以下版本 为<code>options</code>）</td>\n<td>新增节点提交时触发</td>\n</tr>\n<tr>\n<td>edit（不推荐）</td>\n<td><code>[name]: object</code> 编辑的节点信息<br/><code>items: object[]</code>选项集合（&lt; 2.3.2 及以下版本 为<code>options</code>）</td>\n<td>编辑节点提交时触发</td>\n</tr>\n<tr>\n<td>delete（不推荐）</td>\n<td><code>[name]: object</code> 删除的节点信息<br/><code>items: object[]</code>选项集合（&lt; 2.3.2 及以下版本 为<code>options</code>）</td>\n<td>删除节点提交时触发</td>\n</tr>\n<tr>\n<td>loadFinished（不推荐）</td>\n<td><code>[name]: object</code> deferApi 懒加载远程请求成功后返回的数据</td>\n<td>懒加载接口远程请求成功时触发</td>\n</tr>\n</tbody></table>\n<h3><a class=\"anchor\" name=\"change\" href=\"#change\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>change</h3></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n  \"debug\": true,\n  \"body\": [\n    {\n      \"type\": \"tree-select\",\n      \"name\": \"tree\",\n      \"label\": \"Tree\",\n      \"onEvent\": {\n        \"change\": {\n          \"actions\": [\n            {\n              \"actionType\": \"toast\",\n              \"args\": {\n                \"msg\": \"${event.data.tree|json}\"\n              }\n            }\n          ]\n        }\n      },\n      \"options\": [\n        {\n          \"label\": \"Folder A\",\n          \"value\": 1,\n          \"children\": [\n            {\n              \"label\": \"file A\",\n              \"value\": 2\n            },\n            {\n              \"label\": \"file B\",\n              \"value\": 3\n            }\n          ]\n        },\n        {\n          \"label\": \"file C\",\n          \"value\": 4\n        },\n        {\n          \"label\": \"file D\",\n          \"value\": 5\n        }\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h3><a class=\"anchor\" name=\"focus\" href=\"#focus\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>focus</h3></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n  \"debug\": true,\n  \"body\": [\n    {\n      \"type\": \"tree-select\",\n      \"name\": \"tree\",\n      \"label\": \"Tree\",\n      \"onEvent\": {\n        \"focus\": {\n          \"actions\": [\n            {\n              \"actionType\": \"toast\",\n              \"args\": {\n                \"msg\": \"${event.data.tree|json}\"\n              }\n            }\n          ]\n        }\n      },\n      \"options\": [\n        {\n          \"label\": \"Folder A\",\n          \"value\": 1,\n          \"children\": [\n            {\n              \"label\": \"file A\",\n              \"value\": 2\n            },\n            {\n              \"label\": \"file B\",\n              \"value\": 3\n            }\n          ]\n        },\n        {\n          \"label\": \"file C\",\n          \"value\": 4\n        },\n        {\n          \"label\": \"file D\",\n          \"value\": 5\n        }\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h3><a class=\"anchor\" name=\"blur\" href=\"#blur\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>blur</h3></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n  \"debug\": true,\n  \"body\": [\n    {\n      \"type\": \"tree-select\",\n      \"name\": \"tree\",\n      \"label\": \"Tree\",\n      \"onEvent\": {\n        \"blur\": {\n          \"actions\": [\n            {\n              \"actionType\": \"toast\",\n              \"args\": {\n                \"msg\": \"${event.data.tree|json}\"\n              }\n            }\n          ]\n        }\n      },\n      \"options\": [\n        {\n          \"label\": \"Folder A\",\n          \"value\": 1,\n          \"children\": [\n            {\n              \"label\": \"file A\",\n              \"value\": 2\n            },\n            {\n              \"label\": \"file B\",\n              \"value\": 3\n            }\n          ]\n        },\n        {\n          \"label\": \"file C\",\n          \"value\": 4\n        },\n        {\n          \"label\": \"file D\",\n          \"value\": 5\n        }\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h3><a class=\"anchor\" name=\"addconfirm\" href=\"#addconfirm\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>addConfirm</h3><p>配置 <code>creatable</code>后，可监听确认新增操作。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n  \"debug\": true,\n  \"body\": [\n    {\n      \"type\": \"tree-select\",\n      \"name\": \"tree\",\n      \"label\": \"Tree\",\n      \"creatable\": true,\n      \"removable\": true,\n      \"editable\": true,\n      \"onEvent\": {\n        \"addConfirm\": {\n          \"actions\": [\n            {\n              \"actionType\": \"toast\",\n              \"args\": {\n                \"msg\": \"${event.data.item|json}\"\n              }\n            }\n          ]\n        }\n      },\n      \"options\": [\n        {\n          \"label\": \"Folder A\",\n          \"value\": 1,\n          \"children\": [\n            {\n              \"label\": \"file A\",\n              \"value\": 2\n            },\n            {\n              \"label\": \"file B\",\n              \"value\": 3\n            }\n          ]\n        },\n        {\n          \"label\": \"file C\",\n          \"value\": 4\n        },\n        {\n          \"label\": \"file D\",\n          \"value\": 5\n        }\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h3><a class=\"anchor\" name=\"editconfirm\" href=\"#editconfirm\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>editConfirm</h3><p>配置 <code>editable</code>后，可监听确认编辑操作。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n  \"debug\": true,\n  \"body\": [\n    {\n      \"type\": \"tree-select\",\n      \"name\": \"tree\",\n      \"label\": \"Tree\",\n      \"creatable\": true,\n      \"removable\": true,\n      \"editable\": true,\n      \"onEvent\": {\n        \"editConfirm\": {\n          \"actions\": [\n            {\n              \"actionType\": \"toast\",\n              \"args\": {\n                \"msg\": \"${event.data.item|json}\"\n              }\n            }\n          ]\n        }\n      },\n      \"options\": [\n        {\n          \"label\": \"Folder A\",\n          \"value\": 1,\n          \"children\": [\n            {\n              \"label\": \"file A\",\n              \"value\": 2\n            },\n            {\n              \"label\": \"file B\",\n              \"value\": 3\n            }\n          ]\n        },\n        {\n          \"label\": \"file C\",\n          \"value\": 4\n        },\n        {\n          \"label\": \"file D\",\n          \"value\": 5\n        }\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h3><a class=\"anchor\" name=\"deleteconfirm\" href=\"#deleteconfirm\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>deleteConfirm</h3><p>配置 <code>removable</code>后，可监听确认删除操作。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n  \"debug\": true,\n  \"body\": [\n    {\n      \"type\": \"tree-select\",\n      \"name\": \"tree\",\n      \"label\": \"Tree\",\n      \"creatable\": true,\n      \"removable\": true,\n      \"editable\": true,\n      \"onEvent\": {\n        \"deleteConfirm\": {\n          \"actions\": [\n            {\n              \"actionType\": \"toast\",\n              \"args\": {\n                \"msg\": \"${event.data.item|json}\"\n              }\n            }\n          ]\n        }\n      },\n      \"options\": [\n        {\n          \"label\": \"Folder A\",\n          \"value\": 1,\n          \"children\": [\n            {\n              \"label\": \"file A\",\n              \"value\": 2\n            },\n            {\n              \"label\": \"file B\",\n              \"value\": 3\n            }\n          ]\n        },\n        {\n          \"label\": \"file C\",\n          \"value\": 4\n        },\n        {\n          \"label\": \"file D\",\n          \"value\": 5\n        }\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h3><a class=\"anchor\" name=\"deferloadfinished\" href=\"#deferloadfinished\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>deferLoadFinished</h3></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"form\",\n  \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n  \"debug\": true,\n  \"body\": [\n    {\n      \"type\": \"tree-select\",\n      \"name\": \"tree\",\n      \"label\": \"Tree\",\n      \"deferApi\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/deferOptions?label=${label}&waitSeconds=2\",\n      \"onEvent\": {\n        \"deferLoadFinished\": {\n          \"actions\": [\n            {\n              \"actionType\": \"toast\",\n              \"args\": {\n                \"msg\": \"${event.data.result|json}\"\n              }\n            }\n          ]\n        }\n      },\n      \"options\": [\n        {\n          \"label\": \"Folder A\",\n          \"value\": 1,\n          \"collapsed\": true,\n          \"children\": [\n            {\n              \"label\": \"file A\",\n              \"value\": 2\n            },\n            {\n              \"label\": \"file B\",\n              \"value\": 3\n            }\n          ]\n        },\n        {\n          \"label\": \"这下面是懒加载的\",\n          \"value\": 4,\n          \"defer\": true\n        },\n        {\n          \"label\": \"file D\",\n          \"value\": 5\n        }\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%8A%A8%E4%BD%9C%E8%A1%A8\" href=\"#%E5%8A%A8%E4%BD%9C%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>动作表</h2><p>当前组件对外暴露以下特性动作，其他组件可以通过指定<code>actionType: 动作名称</code>、<code>componentId: 该组件id</code>来触发这些动作，动作配置可以通过<code>args: {动作配置项名称: xxx}</code>来配置具体的参数，详细请查看<a href=\"../../docs/concepts/event-action#触发其他组件的动作\">事件动作</a>。</p>\n<table>\n<thead>\n<tr>\n<th>动作名称</th>\n<th>动作配置</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>add</td>\n<td><code>item: Option, parentValue?: any</code></td>\n<td>item 新增的数据项；parentValue 父级数据项的 value（如果配置了 valueField，以 valueField 的字段值为准）</td>\n</tr>\n<tr>\n<td>edit</td>\n<td><code>item: Option, originValue: any</code></td>\n<td>item 编辑后的数据项；originValue 编辑前数据项的 value（如果配置了 valueField，以 valueField 的字段值为准）</td>\n</tr>\n<tr>\n<td>delete</td>\n<td>value: <code> any</code></td>\n<td>删除数据项的 value，（如果配置了 valueField，以 valueField 的字段值为准）</td>\n</tr>\n<tr>\n<td>reload</td>\n<td>-</td>\n<td>刷新</td>\n</tr>\n<tr>\n<td>clear</td>\n<td>-</td>\n<td>清空</td>\n</tr>\n<tr>\n<td>reset</td>\n<td>-</td>\n<td>将值重置为<code>resetValue</code>，若没有配置<code>resetValue</code>，则清空</td>\n</tr>\n<tr>\n<td>setValue</td>\n<td><code>value: string</code> | <code>string[]</code> 更新的值</td>\n<td>更新数据，开启<code>multiple</code>支持设置多项，开启<code>joinValues</code>时，多值用<code>,</code>分隔，否则多值用数组</td>\n</tr>\n</tbody></table>\n</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "基本使用",
          "fragment": "%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8",
          "fullPath": "#%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8",
          "level": 2
        },
        {
          "label": "仅展示选中节点文本信息",
          "fragment": "%E4%BB%85%E5%B1%95%E7%A4%BA%E9%80%89%E4%B8%AD%E8%8A%82%E7%82%B9%E6%96%87%E6%9C%AC%E4%BF%A1%E6%81%AF",
          "fullPath": "#%E4%BB%85%E5%B1%95%E7%A4%BA%E9%80%89%E4%B8%AD%E8%8A%82%E7%82%B9%E6%96%87%E6%9C%AC%E4%BF%A1%E6%81%AF",
          "level": 2
        },
        {
          "label": "只允许选择叶子节点",
          "fragment": "%E5%8F%AA%E5%85%81%E8%AE%B8%E9%80%89%E6%8B%A9%E5%8F%B6%E5%AD%90%E8%8A%82%E7%82%B9",
          "fullPath": "#%E5%8F%AA%E5%85%81%E8%AE%B8%E9%80%89%E6%8B%A9%E5%8F%B6%E5%AD%90%E8%8A%82%E7%82%B9",
          "level": 2
        },
        {
          "label": "如何让某些节点无法点？",
          "fragment": "%E5%A6%82%E4%BD%95%E8%AE%A9%E6%9F%90%E4%BA%9B%E8%8A%82%E7%82%B9%E6%97%A0%E6%B3%95%E7%82%B9-",
          "fullPath": "#%E5%A6%82%E4%BD%95%E8%AE%A9%E6%9F%90%E4%BA%9B%E8%8A%82%E7%82%B9%E6%97%A0%E6%B3%95%E7%82%B9-",
          "level": 2
        },
        {
          "label": "搜索选项",
          "fragment": "%E6%90%9C%E7%B4%A2%E9%80%89%E9%A1%B9",
          "fullPath": "#%E6%90%9C%E7%B4%A2%E9%80%89%E9%A1%B9",
          "level": 2
        },
        {
          "label": "自定义选项渲染",
          "fragment": "%E8%87%AA%E5%AE%9A%E4%B9%89%E9%80%89%E9%A1%B9%E6%B8%B2%E6%9F%93",
          "fullPath": "#%E8%87%AA%E5%AE%9A%E4%B9%89%E9%80%89%E9%A1%B9%E6%B8%B2%E6%9F%93",
          "level": 2
        },
        {
          "label": "属性表",
          "fragment": "%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "fullPath": "#%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "level": 2
        },
        {
          "label": "事件表",
          "fragment": "%E4%BA%8B%E4%BB%B6%E8%A1%A8",
          "fullPath": "#%E4%BA%8B%E4%BB%B6%E8%A1%A8",
          "level": 2,
          "children": [
            {
              "label": "change",
              "fragment": "change",
              "fullPath": "#change",
              "level": 3
            },
            {
              "label": "focus",
              "fragment": "focus",
              "fullPath": "#focus",
              "level": 3
            },
            {
              "label": "blur",
              "fragment": "blur",
              "fullPath": "#blur",
              "level": 3
            },
            {
              "label": "addConfirm",
              "fragment": "addconfirm",
              "fullPath": "#addconfirm",
              "level": 3
            },
            {
              "label": "editConfirm",
              "fragment": "editconfirm",
              "fullPath": "#editconfirm",
              "level": 3
            },
            {
              "label": "deleteConfirm",
              "fragment": "deleteconfirm",
              "fullPath": "#deleteconfirm",
              "level": 3
            },
            {
              "label": "deferLoadFinished",
              "fragment": "deferloadfinished",
              "fullPath": "#deferloadfinished",
              "level": 3
            }
          ]
        },
        {
          "label": "动作表",
          "fragment": "%E5%8A%A8%E4%BD%9C%E8%A1%A8",
          "fullPath": "#%E5%8A%A8%E4%BD%9C%E8%A1%A8",
          "level": 2
        }
      ],
      "level": 0
    }
  };

});
