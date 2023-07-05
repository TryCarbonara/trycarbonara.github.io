# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = 'Trycarbonara'
copyright = '2023, Karbonara Inc.'
author = 'Karbonara Inc.'

# The master toctree document.
master_doc = 'index'

# The version info for the project you're documenting, acts as replacement for
# |version| and |release|, also used in various other places throughout the
# built documents.
#
# The short X.Y version.
# version = u'0.1'
# The full version, including alpha/beta/rc tags.
# release = u'0.1'

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = ['myst_parser']
# extensions = []

templates_path = ['_templates']
exclude_patterns = ['dist', 'Thumbs.db', '.DS_Store']

source_suffix = {
    '.rst': 'restructuredtext',
    '.md': 'markdown',
}


# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_static_path = ['_static']
# html_theme = 'alabaster'
# html_theme = 'sphinx_rtd_theme'
html_theme = 'sphinx_book_theme'
html_logo = "_static/logo-name.png"

# If true, links to the reST sources are added to the pages.
html_show_sourcelink = False
