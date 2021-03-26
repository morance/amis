amis.define('docs/zh-CN/components/property.md', function(require, exports, module, define) {

  module.exports = {
    "title": "Property 属性表",
    "description": null,
    "type": 0,
    "group": "⚙ 组件",
    "menuName": "Property 属性表",
    "icon": null,
    "order": 60,
    "html": "<div class=\"markdown-body\"><p>使用表格的方式显示只读信息，如产品详情页。</p>\n<h2><a class=\"anchor\" name=\"%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" href=\"#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>基本用法</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"property\",\n  \"title\": \"机器配置\",\n  \"items\": [\n    {\n      \"label\": \"cpu\",\n      \"content\": \"1 core\"\n    },\n    {\n      \"label\": \"memory\",\n      \"content\": \"4G\"\n    },\n    {\n      \"label\": \"disk\",\n      \"content\": \"80G\"\n    },\n    {\n      \"label\": \"network\",\n      \"content\": \"4M\",\n      \"span\": 2\n    },\n    {\n      \"label\": \"IDC\",\n      \"content\": \"beijing\"\n    },\n    {\n      \"label\": \"Note\",\n      \"content\": \"其它说明\",\n      \"span\": 3\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E7%AE%80%E6%98%93%E6%A8%A1%E5%BC%8F\" href=\"#%E7%AE%80%E6%98%93%E6%A8%A1%E5%BC%8F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>简易模式</h2><p>默认是表格模式，还可以通过 <code>&quot;mode&quot;=&quot;simple&quot;</code> 改成简易模式，在这种模式下没有边框，属性名和值是通过 <code>separator</code> 来分隔</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"property\",\n  \"mode\": \"simple\",\n  \"separator\": \"：\",\n  \"items\": [\n    {\n      \"label\": \"cpu\",\n      \"content\": \"1 core\"\n    },\n    {\n      \"label\": \"memory\",\n      \"content\": \"4G\"\n    },\n    {\n      \"label\": \"disk\",\n      \"content\": \"80G\"\n    },\n    {\n      \"label\": \"network\",\n      \"content\": \"4M\",\n      \"span\": 2\n    },\n    {\n      \"label\": \"IDC\",\n      \"content\": \"beijing\"\n    },\n    {\n      \"label\": \"Note\",\n      \"content\": \"其它说明\",\n      \"span\": 3\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E4%BD%BF%E7%94%A8%E5%85%B6%E5%AE%83%E5%B1%95%E7%8E%B0\" href=\"#%E4%BD%BF%E7%94%A8%E5%85%B6%E5%AE%83%E5%B1%95%E7%8E%B0\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>使用其它展现</h2><p><code>label</code> 和 <code>content</code> 均支持使用 <code>amis</code> 其它渲染组件，比如</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"property\",\n  \"items\": [\n    {\n      \"label\": \"tpl\",\n      \"content\": {\n        \"type\": \"tpl\",\n        \"tpl\": \"1 <b>Core</b>\"\n      }\n    },\n    {\n      \"label\": \"icon\",\n      \"content\": {\n        \"type\": \"icon\",\n        \"icon\": \"microchip\"\n      }\n    },\n    {\n      \"label\": \"图片\",\n      \"content\": {\n        \"type\": \"image\",\n        \"src\": \"https://internal-amis-res.cdn.bcebos.com/images/2020-1/1578395692722/4f3cb4202335.jpeg@s_0,w_216,l_1,f_jpg,q_80\"\n      }\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%8A%A8%E6%80%81%E5%86%85%E5%AE%B9\" href=\"#%E5%8A%A8%E6%80%81%E5%86%85%E5%AE%B9\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>动态内容</h2><p>属性表本身没有数据获取功能，需要结合 <a href=\"./service\">service</a> 来获取数据，下面的例子为了方便就直接放 page 下的 data 中了，它的效果和用 service 是一样的。</p>\n<p>动态内容有两种情况：</p>\n<ol>\n<li>label 固定、content 不同</li>\n<li>label 和 content 都不确定</li>\n</ol>\n<p>第一种情况只需要在 content 里使用变量即可，因为可以用任意 amis 节点。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\" undefined>{\n  \"type\": \"page\",\n  \"data\": {\n    \"cpu\": \"1 core\",\n    \"memory\": \"4G\",\n    \"disk\": \"80G\"\n  },\n  \"body\": {\n    \"type\": \"property\",\n    \"items\": [\n      {\n        \"label\": \"cpu\",\n        \"content\": \"${cpu}\"\n      },\n      {\n        \"label\": \"memory\",\n        \"content\": \"${memory}\"\n      },\n      {\n        \"label\": \"disk\",\n        \"content\": \"${disk}\"\n      }\n    ]\n  }\n}\n</script></div><div class=\"markdown-body\">\n<p>第二种情况需要使用 <code>source</code> 属性来获取上下文中的内容。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\" undefined>{\n  \"type\": \"page\",\n  \"data\": {\n    \"items\": [\n      {\n        \"label\": \"cpu\",\n        \"content\": \"1 core\"\n      },\n      {\n        \"label\": \"memory\",\n        \"content\": \"4G\"\n      },\n      {\n        \"label\": \"disk\",\n        \"content\": \"80G\"\n      },\n      {\n        \"label\": \"network\",\n        \"content\": \"4M\",\n        \"span\": 2\n      },\n      {\n        \"label\": \"IDC\",\n        \"content\": \"beijing\"\n      },\n      {\n        \"label\": \"Note\",\n        \"content\": \"其它说明\",\n        \"span\": 3\n      }\n    ]\n  },\n  \"body\": {\n    \"type\": \"property\",\n    \"source\": \"items\"\n  }\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E6%A0%B7%E5%BC%8F%E6%8E%A7%E5%88%B6\" href=\"#%E6%A0%B7%E5%BC%8F%E6%8E%A7%E5%88%B6\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>样式控制</h2><p>通过 <code>labelStyle</code> 和 <code>contentStyle</code> 来控制属性名和属性值的样式，比如水平及垂直方向的对齐方式：</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"property\",\n  \"labelStyle\": {\n    \"textAlign\": \"left\",\n    \"verticalAlign\": \"top\"\n  },\n  \"contentStyle\": {\n    \"verticalAlign\": \"top\"\n  },\n  \"items\": [\n    {\n      \"label\": \"cpu\",\n      \"content\": \"1 core\"\n    },\n    {\n      \"label\": \"memory\",\n      \"content\": \"4G\"\n    },\n    {\n      \"label\": \"disk\",\n      \"content\": {\n        \"type\": \"tpl\",\n        \"tpl\": \"C: 80G<br/>D: 1T<br/>E: 2T</pre>\"\n      }\n    },\n    {\n      \"label\": \"network\",\n      \"content\": \"4M\",\n      \"span\": 2\n    },\n    {\n      \"label\": \"IDC\",\n      \"content\": \"beijing\"\n    },\n    {\n      \"label\": \"Note\",\n      \"content\": \"其它说明\",\n      \"span\": 3\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<p>如果是简易模式，因为合并到一个单元格中了，因此只能通过 <code>contentStyle</code> 设置单元格样式，<code>labelStyle</code> 只能设置属性名文本的样式。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"property\",\n  \"mode\": \"simple\",\n  \"labelStyle\": {\n    \"fontWeight\": \"bold\",\n    \"textTransform\": \"capitalize\"\n  },\n  \"contentStyle\": {\n    \"verticalAlign\": \"top\"\n  },\n  \"items\": [\n    {\n      \"label\": \"cpu\",\n      \"content\": \"1 core\"\n    },\n    {\n      \"label\": \"memory\",\n      \"content\": \"4G\"\n    },\n    {\n      \"label\": \"disk\",\n      \"content\": {\n        \"type\": \"tpl\",\n        \"tpl\": \"C: 80G<br/>D: 1T<br/>E: 2T</pre>\"\n      }\n    },\n    {\n      \"label\": \"network\",\n      \"content\": \"4M\",\n      \"span\": 2\n    },\n    {\n      \"label\": \"IDC\",\n      \"content\": \"beijing\"\n    },\n    {\n      \"label\": \"Note\",\n      \"content\": \"其它说明\",\n      \"span\": 3\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E6%98%BE%E7%A4%BA%E5%88%97%E6%95%B0\" href=\"#%E6%98%BE%E7%A4%BA%E5%88%97%E6%95%B0\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>显示列数</h2><p>通过 <code>column</code> 来控制一行显示几列，默认是 3 列，下面示例是改成 2 列的效果</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"property\",\n  \"column\": 2,\n  \"items\": [\n    {\n      \"label\": \"cpu\",\n      \"content\": \"1 core\"\n    },\n    {\n      \"label\": \"memory\",\n      \"content\": \"4G\"\n    },\n    {\n      \"label\": \"disk\",\n      \"content\": \"80G\"\n    },\n    {\n      \"label\": \"IDC\",\n      \"content\": \"beijing\"\n    },\n    {\n      \"label\": \"network\",\n      \"content\": \"4M\",\n      \"span\": 2\n    },\n    {\n      \"label\": \"Note\",\n      \"content\": \"其它说明\",\n      \"span\": 2\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E9%9A%90%E8%97%8F%E6%9F%90%E4%B8%AA%E5%B1%9E%E6%80%A7%E5%80%BC\" href=\"#%E9%9A%90%E8%97%8F%E6%9F%90%E4%B8%AA%E5%B1%9E%E6%80%A7%E5%80%BC\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>隐藏某个属性值</h2><p>items 里的属性还支持 <code>visibleOn</code> 和 <code>hiddenOn</code> 表达式，能隐藏部分属性，如果有空间后续组件会自动补上来，如下示例的 memory 隐藏了：</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"property\",\n  \"items\": [\n    {\n      \"label\": \"cpu\",\n      \"content\": \"1 core\"\n    },\n    {\n      \"label\": \"memory\",\n      \"content\": \"4G\",\n      \"visibleOn\": \"data.cpu > 1\"\n    },\n    {\n      \"label\": \"network\",\n      \"content\": \"4M\",\n      \"span\": 2\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%B1%9E%E6%80%A7%E8%A1%A8\" href=\"#%E5%B1%9E%E6%80%A7%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>属性表</h2><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>className</td>\n<td><code>string</code></td>\n<td></td>\n<td>外层 dom 的类名</td>\n</tr>\n<tr>\n<td>style</td>\n<td><code>object</code></td>\n<td></td>\n<td>外层 dom 的样式</td>\n</tr>\n<tr>\n<td>labelStyle</td>\n<td><code>object</code></td>\n<td></td>\n<td>属性名的样式</td>\n</tr>\n<tr>\n<td>contentStyle</td>\n<td><code>object</code></td>\n<td></td>\n<td>属性值的样式</td>\n</tr>\n<tr>\n<td>column</td>\n<td><code>number</code></td>\n<td>3</td>\n<td>每行几列</td>\n</tr>\n<tr>\n<td>mode</td>\n<td><code>string</code></td>\n<td>&#39;table&#39;</td>\n<td>显示模式，目前只有 &#39;table&#39; 和 &#39;simple&#39;</td>\n</tr>\n<tr>\n<td>separator</td>\n<td><code>string</code></td>\n<td>&#39;,&#39;</td>\n<td>&#39;simple&#39; 模式下属性名和值之间的分隔符</td>\n</tr>\n<tr>\n<td>items[].label</td>\n<td><code>SchemaTpl</code></td>\n<td></td>\n<td>属性名</td>\n</tr>\n<tr>\n<td>items[].content</td>\n<td><code>SchemaTpl</code></td>\n<td></td>\n<td>属性值</td>\n</tr>\n<tr>\n<td>items[].span</td>\n<td><code>SchemaTpl</code></td>\n<td></td>\n<td>属性值跨几列</td>\n</tr>\n<tr>\n<td>items[].visibleOn</td>\n<td><a href=\"../../docs/concepts/expression\">表达式</a></td>\n<td></td>\n<td>显示表达式</td>\n</tr>\n<tr>\n<td>items[].hiddenOn</td>\n<td><a href=\"../../docs/concepts/expression\">表达式</a></td>\n<td></td>\n<td>隐藏表达式</td>\n</tr>\n<tr>\n<td>items[].span</td>\n<td><code>SchemaTpl</code></td>\n<td></td>\n<td>属性值跨几列</td>\n</tr>\n</tbody></table>\n</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "基本用法",
          "fragment": "%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "fullPath": "#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "level": 2
        },
        {
          "label": "简易模式",
          "fragment": "%E7%AE%80%E6%98%93%E6%A8%A1%E5%BC%8F",
          "fullPath": "#%E7%AE%80%E6%98%93%E6%A8%A1%E5%BC%8F",
          "level": 2
        },
        {
          "label": "使用其它展现",
          "fragment": "%E4%BD%BF%E7%94%A8%E5%85%B6%E5%AE%83%E5%B1%95%E7%8E%B0",
          "fullPath": "#%E4%BD%BF%E7%94%A8%E5%85%B6%E5%AE%83%E5%B1%95%E7%8E%B0",
          "level": 2
        },
        {
          "label": "动态内容",
          "fragment": "%E5%8A%A8%E6%80%81%E5%86%85%E5%AE%B9",
          "fullPath": "#%E5%8A%A8%E6%80%81%E5%86%85%E5%AE%B9",
          "level": 2
        },
        {
          "label": "样式控制",
          "fragment": "%E6%A0%B7%E5%BC%8F%E6%8E%A7%E5%88%B6",
          "fullPath": "#%E6%A0%B7%E5%BC%8F%E6%8E%A7%E5%88%B6",
          "level": 2
        },
        {
          "label": "显示列数",
          "fragment": "%E6%98%BE%E7%A4%BA%E5%88%97%E6%95%B0",
          "fullPath": "#%E6%98%BE%E7%A4%BA%E5%88%97%E6%95%B0",
          "level": 2
        },
        {
          "label": "隐藏某个属性值",
          "fragment": "%E9%9A%90%E8%97%8F%E6%9F%90%E4%B8%AA%E5%B1%9E%E6%80%A7%E5%80%BC",
          "fullPath": "#%E9%9A%90%E8%97%8F%E6%9F%90%E4%B8%AA%E5%B1%9E%E6%80%A7%E5%80%BC",
          "level": 2
        },
        {
          "label": "属性表",
          "fragment": "%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "fullPath": "#%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "level": 2
        }
      ],
      "level": 0
    }
  };

});
