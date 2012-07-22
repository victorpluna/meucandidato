from django.contrib.auth.decorators import user_passes_test
from aplicativo.models import UsuarioCidade
from django.utils.decorators import available_attrs
from functools import wraps


def tem_cidade(func):
	def wrapper_view(*args, **kwargs):
		return func(*args, **kwargs)
	wrapper_view.has_user = True
	return wraps(func, assigned=available_attrs(func))(wrapper_view)
